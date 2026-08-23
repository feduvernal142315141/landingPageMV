#!/usr/bin/env node
/**
 * Persistent Dev Server Manager
 * Runs Astro dev server in background, survives terminal closure
 */

import { spawn } from 'child_process';
import { writeFileSync, readFileSync, existsSync, unlinkSync } from 'fs';
import { join } from 'path';

const PID_FILE = join(process.cwd(), '.dev-server.pid');
const LOG_FILE = join(process.cwd(), '.dev-server.log');
const PORT = 4321;

function getNpxCommand() {
  // On Windows, use cmd /c npx to ensure npx is found in PATH
  if (process.platform === 'win32') {
    return { command: 'cmd', args: ['/c', 'npx'] };
  }
  return { command: 'npx', args: [] };
}

function start() {
  if (isRunning()) {
    console.log(`⚠️  Dev server already running (PID: ${getPid()})`);
    console.log(`   URL: http://localhost:${PORT}`);
    return;
  }

  console.log('🚀 Starting persistent dev server...');

  const { command, args: npxArgs } = getNpxCommand();
  const child = spawn(command, [...npxArgs, 'astro', 'dev', '--port', String(PORT), '--host', '0.0.0.0', '--force'], {
    detached: true,
    stdio: ['ignore', 'pipe', 'pipe'],
    cwd: process.cwd(),
    env: { ...process.env, FORCE_COLOR: '1' },
    shell: process.platform === 'win32' // Use shell on Windows to find npx in PATH
  });

  child.unref();

  child.stdout.on('data', (data) => {
    const msg = data.toString();
    appendLog(msg);
    if (msg.includes('ready in') || msg.includes('Local')) {
      console.log(msg.trim());
    }
  });

  child.stderr.on('data', (data) => {
    appendLog(`[ERR] ${data.toString()}`);
  });

  child.on('error', (err) => {
    appendLog(`[ERROR] ${err.message}`);
  });

  child.on('exit', (code) => {
    appendLog(`[EXIT] Process exited with code ${code}`);
    if (existsSync(PID_FILE)) {
      unlinkSync(PID_FILE);
    }
  });

  writeFileSync(PID_FILE, String(child.pid));
  appendLog(`[START] Dev server started with PID ${child.pid} on port ${PORT}`);

  console.log(`✅ Dev server started (PID: ${child.pid})`);
  console.log(`   URL: http://localhost:${PORT}`);
  console.log(`   Logs: ${LOG_FILE}`);
  console.log(`   To stop: npm run dev:stop`);
}

function stop() {
  const pid = getPid();
  if (!pid) {
    console.log('⚠️  No dev server running');
    return;
  }

  console.log(`🛑 Stopping dev server (PID: ${pid})...`);
  
  try {
    process.kill(pid, 'SIGTERM');
    setTimeout(() => {
      try {
        process.kill(pid, 'SIGKILL');
      } catch {}
    }, 5000);
    
    if (existsSync(PID_FILE)) {
      unlinkSync(PID_FILE);
    }
    console.log('✅ Dev server stopped');
  } catch (err) {
    console.log(`⚠️  Could not stop: ${err.message}`);
  }
}

function status() {
  if (isRunning()) {
    console.log(`✅ Dev server running (PID: ${getPid()})`);
    console.log(`   URL: http://localhost:${PORT}`);
    console.log(`   Logs: ${LOG_FILE}`);
  } else {
    console.log('❌ Dev server not running');
  }
}

function logs() {
  if (existsSync(LOG_FILE)) {
    const content = readFileSync(LOG_FILE, 'utf-8');
    console.log(content);
  } else {
    console.log('No logs yet');
  }
}

function getPid() {
  if (existsSync(PID_FILE)) {
    const pid = parseInt(readFileSync(PID_FILE, 'utf-8').trim(), 10);
    return isNaN(pid) ? null : pid;
  }
  return null;
}

function isRunning() {
  const pid = getPid();
  if (!pid) return false;
  
  try {
    process.kill(pid, 0);
    return true;
  } catch {
    if (existsSync(PID_FILE)) {
      unlinkSync(PID_FILE);
    }
    return false;
  }
}

function appendLog(msg) {
  const timestamp = new Date().toISOString();
  writeFileSync(LOG_FILE, `${timestamp} ${msg}\n`, { flag: 'a' });
}

const command = process.argv[2];
switch (command) {
  case 'start':
    start();
    break;
  case 'stop':
    stop();
    break;
  case 'restart':
    stop();
    setTimeout(start, 1000);
    break;
  case 'status':
    status();
    break;
  case 'logs':
    logs();
    break;
  default:
    console.log(`
Persistent Dev Server Manager

Usage:
  npm run dev:start    Start persistent dev server
  npm run dev:stop     Stop dev server
  npm run dev:restart  Restart dev server
  npm run dev:status   Check server status
  npm run dev:logs     View server logs

Server runs on http://localhost:4321
Survives terminal closure via detached process.
    `);
}
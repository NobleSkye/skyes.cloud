import { useEffect, useRef } from 'react';
import { Terminal as XTerm } from '@xterm/xterm';
import '@xterm/xterm/css/xterm.css';

export function Terminal() {
  const terminalRef = useRef<HTMLDivElement>(null);
  const xtermRef = useRef<XTerm | null>(null);

  useEffect(() => {
    if (terminalRef.current && !xtermRef.current) {
      const term = new XTerm({
        cursorBlink: true,
        theme: {
          background: '#1e293b',
          foreground: '#e2e8f0',
        }
      });

      term.open(terminalRef.current);
      xtermRef.current = term;

      term.writeln('Welcome to skyes.cloud demo terminal');
      term.writeln('Type "help" for available commands\n');
      term.write('demo-user@skyes:~$ ');

      const commands: Record<string, () => void> = {
        help: () => {
          term.writeln('\r\nAvailable commands:');
          term.writeln('  whoami    - Display current user');
          term.writeln('  ls        - List directory contents');
          term.writeln('  pwd       - Print working directory');
          term.writeln('  date      - Show current date/time');
          term.writeln('  top       - Display process list');
          term.writeln('  df -h     - Show disk usage');
          term.writeln('  free -m   - Show memory usage');
          term.writeln('  ping      - Test network connectivity');
          term.writeln('  clear     - Clear terminal');
          term.writeln('  help      - Show this help message\n');
        },
        whoami: () => term.writeln('\r\ndemo-user'),
        pwd: () => term.writeln('\r\n/home/demo-user'),
        ls: () => term.writeln('\r\nDocuments  Downloads  public_html  logs  backups'),
        date: () => term.writeln(`\r\n${new Date().toString()}`),
        clear: () => term.clear(),
        'df -h': () => {
          term.writeln('\r\nFilesystem      Size  Used  Avail Use% Mounted on');
          term.writeln('/dev/vda1       50G   15G    35G  30%  /');
          term.writeln('/dev/vdb1      100G   25G    75G  25%  /data');
        },
        'free -m': () => {
          term.writeln('\r\n              total     used     free   shared  buff/cache   available');
          term.writeln('Mem:           7822     2100     4024      195      1698        5277');
          term.writeln('Swap:          2048        0     2048');
        },
        top: () => {
          term.writeln('\r\ntop - 14:23:45 up 15 days, 4:42, 1 user, load average: 0.08, 0.12, 0.10');
          term.writeln('Tasks: 128 total,   1 running, 127 sleeping,   0 stopped,   0 zombie');
          term.writeln('%Cpu(s):  2.3 us,  1.2 sy,  0.0 ni, 96.4 id,  0.1 wa,  0.0 hi,  0.0 si');
          term.writeln('MiB Mem:   7822.8 total,   4024.2 free,   2100.1 used,   1698.5 buff/cache');
          term.writeln('MiB Swap:  2048.0 total,   2048.0 free,      0.0 used,   5277.2 avail Mem');
        },
        ping: () => {
          let count = 0;
          const interval = setInterval(() => {
            if (count < 4) {
              term.writeln(`\r\n64 bytes from demo.skyes.cloud (10.0.0.1): icmp_seq=${count + 1} ttl=64 time=${Math.random() * 10 + 20}.${Math.floor(Math.random() * 1000)} ms`);
              count++;
            } else {
              clearInterval(interval);
              term.writeln('\r\n--- demo.skyes.cloud ping statistics ---');
              term.writeln('4 packets transmitted, 4 received, 0% packet loss, time 3004ms');
              term.writeln('rtt min/avg/max/mdev = 20.121/25.234/30.123/2.345 ms');
              term.write('\r\ndemo-user@skyes:~$ ');
            }
          }, 1000);
        }
      };

      let currentCommand = '';

      term.onKey(({ key, domEvent }) => {
        const ev = domEvent;
        const printable = !ev.altKey && !ev.ctrlKey && !ev.metaKey;

        if (ev.keyCode === 13) { // Enter
          term.writeln('');
          if (currentCommand.trim()) {
            const cmd = currentCommand.trim();
            if (commands[cmd]) {
              commands[cmd]();
            } else {
              term.writeln(`Command not found: ${cmd}`);
            }
          }
          currentCommand = '';
          term.write('demo-user@skyes:~$ ');
        } else if (ev.keyCode === 8) { // Backspace
          if (currentCommand.length > 0) {
            currentCommand = currentCommand.slice(0, -1);
            term.write('\b \b');
          }
        } else if (printable) {
          currentCommand += key;
          term.write(key);
        }
      });
    }

    return () => {
      if (xtermRef.current) {
        xtermRef.current.dispose();
      }
    };
  }, []);

  return <div ref={terminalRef} className="h-[400px] bg-slate-800 rounded-lg" />;
}
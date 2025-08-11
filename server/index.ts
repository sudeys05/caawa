// Redirect to JavaScript version and keep process running
console.log('Starting server...');

async function startServer() {
  try {
    await import('./index.js');
    console.log('Server started successfully');
    
    // Keep the process running
    setInterval(() => {
      // Heartbeat to keep process alive
    }, 1000);
    
    process.on('SIGINT', () => {
      console.log('Server shutting down...');
      process.exit(0);
    });
    
  } catch (err) {
    console.error('Failed to start server:', err);
    process.exit(1);
  }
}

startServer();
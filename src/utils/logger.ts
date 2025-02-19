const isLoggingEnabled = process.env.NEXT_PUBLIC_ENABLE_LOGGING === 'true';

type LogArgs = string | number | boolean | null | undefined | object;

export const logger = {
  log: (...args: LogArgs[]) => {
    if (isLoggingEnabled) {
      console.log(...args);
    }
  },
  error: (...args: LogArgs[]) => {
    if (isLoggingEnabled) {
      console.error(...args);
    }
  },
  warn: (...args: LogArgs[]) => {
    if (isLoggingEnabled) {
      console.warn(...args);
    }
  },
  info: (...args: LogArgs[]) => {
    if (isLoggingEnabled) {
      console.info(...args);
    }
  },
  debug: (...args: LogArgs[]) => {
    if (isLoggingEnabled) {
      console.debug(...args);
    }
  }
};

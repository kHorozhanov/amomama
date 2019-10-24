declare namespace AMOMAMA {
  interface RequestInfo<T = unknown> {
    loading?: boolean;
    data?: T;
    error?: unknown;
  }
}

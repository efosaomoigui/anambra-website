export async function fetcher(url: string, options: RequestInit = {}) {
  const defaultHeaders = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };

  const mergedOptions: RequestInit = {
    ...options,
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
  };

  const response = await fetch(url, mergedOptions);

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(
      errorData.message ||
        `API error: ${response.status} ${response.statusText}`
    );
  }

  return response.json();
}

export default function ErrorPage({
  code,
  message,
  onRetry,
}: {
  code?: string;
  message: string;
  onRetry?: () => void;
}) {
  const copyError = async () => {
    try {
      await navigator.clipboard.writeText(`${code || "ERROR"}: ${message}`);
      // eslint-disable-next-line no-alert
      alert("Error copied to clipboard");
    } catch {
      // ignore
    }
  };

  return (
    <div className="flex w-full flex-col items-center justify-center px-4 py-32 text-orange sm:py-50">
      <h1 className="text-6xl font-extrabold leading-none text-white sm:text-[120px] lg:text-[160px]">
        {code || "ERROR"}
      </h1>
      <p className="mt-6 max-w-2xl text-center text-base leading-7 text-gray sm:text-paragraph">
        {message}
      </p>

      <div className="mt-8 flex gap-4">
        {onRetry && (
          <button
            onClick={onRetry}
            className="rounded-lg border border-white/20 bg-black/20 px-4 py-2 text-white hover:opacity-90"
          >
            Retry
          </button>
        )}

        <button
          onClick={copyError}
          className="rounded-lg border border-white/20 bg-black/20 px-4 py-2 text-white hover:opacity-90"
        >
          Copy
        </button>
      </div>

      <p className="mt-6 text-sm text-gray/70">Check your Firebase environment variables or contact the site owner.</p>
    </div>
  );
}

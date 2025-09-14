const SpotifySuggestions = () => {
  return (
    <div className="mt-6">
      <strong>Idées de chansons :</strong>
      <div className="mt-2">
        <iframe
          data-testid="embed-iframe"
          style={{ borderRadius: '12px' }}
          src="https://open.spotify.com/embed/playlist/2yHhJNvzDaVi9rhjbHfZLx?utm_source=generator"
          width="100%"
          height="80"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default SpotifySuggestions;

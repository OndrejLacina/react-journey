type WelcomeCardProps = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
};

function WelcomeCard(props: WelcomeCardProps) {
  const { title, description, imageSrc, imageAlt } = props;

  return (
    <div className="max-w-xl rounded-2xl border bg-white p-6 shadow-sm">
      <div className="flex items-center gap-4">
        <img
          src={imageSrc}
          alt={imageAlt ?? title}
          className="h-14 w-14 rounded-xl object-cover"
        />
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">{title}</h1>
          <p className="mt-1 text-slate-600">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default WelcomeCard;

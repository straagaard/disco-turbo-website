type LogoProps = {
  className?: string;
};

export default function Logo({ className = "h-[30px] w-auto" }: LogoProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src="/disco-turbo-logo.svg" alt="Disco Turbo" className={className} />
  );
}

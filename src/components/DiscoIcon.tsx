type DiscoIconProps = {
  className?: string;
};

export default function DiscoIcon({ className = "h-10 w-10" }: DiscoIconProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src="/disco-icon.svg" alt="" className={className} />
  );
}

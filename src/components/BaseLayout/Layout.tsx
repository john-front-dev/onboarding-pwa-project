type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className="bg-[#111417] w-full">
      <div className="min-h-screen w-full flex flex-col items-center justify-between max-w-md mx-auto">
        {children}
      </div>
    </div>
  );
}

import { Logo } from "./_components/logo";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full justify-center items-center flex flex-col space-y-6">
      <Logo />
      {children}
    </div>
  );
};

export default AuthLayout;

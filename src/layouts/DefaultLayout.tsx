import Header from "@/components/Header";

interface DefaultLayoutProps {
  children: React.ReactNode;
}

const DefaultLayout = (props: DefaultLayoutProps) => {
  return (
    <div className="component:DefaultLayout">
      <Header />
      <div className="">{props.children}</div>
    </div>
  );
};

export default DefaultLayout;

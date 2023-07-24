import MainNavigation from "../components/MainNavigation";

const ErrorPage: React.FC = () => {
  return (
    <>
      <MainNavigation />
      <main>
        <h1>Ups...Diabetic App Lost in the Virtual Candyland! 🍭🗺️</h1>
        <p>We could not find this page.</p>
      </main>
    </>
  );
};

export default ErrorPage;

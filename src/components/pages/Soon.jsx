import Section from "../../components/Section";

const ComingSoon = () => {
  return (
    <Section id="coming-soon" className="h-[73vh] flex items-center justify-center p-4">
      <div className="text-center w-full max-w-lg">
        <h1 className="text-4xl font-bold mb-8">Coming Soon</h1>

        {/* Loading Spinner */}
        <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-blue-600 border-solid border-opacity-75 mx-auto mb-6"></div>

        <p className="text-lg text-gray-700">We’re getting things ready for you!</p>
      </div>
    </Section>
  );
};

export default ComingSoon;

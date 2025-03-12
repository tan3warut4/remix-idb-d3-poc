import NetworkStatus from "~/components/NetworkStatus";

export default function Index() {
  return (
    <>
      <div className="h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold">Cat's breed</h1>
        
      </div>
      <NetworkStatus />
    </>
  );
}
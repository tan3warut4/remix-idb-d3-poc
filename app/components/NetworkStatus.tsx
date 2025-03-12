import useNetworkStatus from "~/hooks/UseNetworkStatus";

export default function NetworkStatus() {
    const { isOnline } = useNetworkStatus();
    return (
        <div
            className={`fixed bottom-5 right-5 p-3 rounded-lg shadow-lg text-white ${isOnline ? "bg-green-500" : "bg-red-500"
                }`}
        >
            {isOnline ? "You are online ✅" : "You are offline ❌"}
        </div>
    );
}

export default function App() {
    const createRectangle = () => {
        parent.postMessage({ pluginMessage: { type: 'create-rectangle' } }, '*');
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
            <h1 className="text-3xl font-bold mb-6">Figma Plugin</h1>
            <button
                onClick={createRectangle}
                className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
                Create Rectangle
            </button>
        </div>
    );
}
import { useState } from 'react';

const Sketch: React.FC = () => {
  const [selectedTool, setSelectedTool] = useState('select');
  const [zoom, setZoom] = useState(100);

  const tools = [
    { id: 'select', icon: '↖️' },
    { id: 'artboard', icon: '🖼️' },
    { id: 'rectangle', icon: '⬜' },
    { id: 'oval', icon: '⭕' },
    { id: 'text', icon: 'T' },
    { id: 'pencil', icon: '✏️' },
  ];

  const layers = [
    { name: 'Header', type: 'group', children: ['Logo', 'Navigation'] },
    { name: 'Hero Section', type: 'artboard' },
    { name: 'Button', type: 'symbol' },
  ];

  return (
    <div className="h-full flex flex-col bg-[#f5f5f5]">
      {/* Toolbar */}
      <div className="h-12 bg-white border-b flex items-center px-4 gap-4">
        <div className="flex gap-1">
          {tools.map(tool => (
            <button
              key={tool.id}
              onClick={() => setSelectedTool(tool.id)}
              className={`w-9 h-9 rounded flex items-center justify-center ${
                selectedTool === tool.id ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'
              }`}
            >
              {tool.icon}
            </button>
          ))}
        </div>
        <div className="flex-1" />
        <div className="flex items-center gap-2 text-sm">
          <button onClick={() => setZoom(z => Math.max(25, z - 25))}>➖</button>
          <span className="w-16 text-center">{zoom}%</span>
          <button onClick={() => setZoom(z => Math.min(400, z + 25))}>➕</button>
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden">
        {/* Layers Panel */}
        <div className="w-60 bg-white border-r">
          <div className="p-3 border-b font-semibold text-sm">Layers</div>
          <div className="p-2">
            {layers.map((layer, i) => (
              <div key={i} className="flex items-center gap-2 px-2 py-1.5 hover:bg-gray-100 rounded cursor-pointer">
                <span className="text-gray-400">
                  {layer.type === 'group' ? '📁' : layer.type === 'symbol' ? '💎' : '🖼️'}
                </span>
                <span className="text-sm">{layer.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Canvas */}
        <div className="flex-1 overflow-auto p-8 bg-[#e5e5e5]">
          <div 
            className="bg-white shadow-lg mx-auto"
            style={{ width: 375, height: 812, transform: `scale(${zoom / 100})`, transformOrigin: 'top center' }}
          >
            {/* Mock iPhone Frame */}
            <div className="h-full p-4">
              <div className="h-full border-2 border-dashed border-gray-200 rounded-lg flex items-center justify-center text-gray-400">
                <div className="text-center">
                  <div className="text-4xl mb-2">📱</div>
                  <div>iPhone 14 Pro</div>
                  <div className="text-sm">375 × 812</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Inspector */}
        <div className="w-64 bg-white border-l p-4">
          <div className="mb-6">
            <div className="text-xs text-gray-500 mb-2">POSITION</div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="text-xs text-gray-400">X</label>
                <input type="number" className="w-full border rounded px-2 py-1 text-sm" defaultValue="0" />
              </div>
              <div>
                <label className="text-xs text-gray-400">Y</label>
                <input type="number" className="w-full border rounded px-2 py-1 text-sm" defaultValue="0" />
              </div>
            </div>
          </div>

          <div className="mb-6">
            <div className="text-xs text-gray-500 mb-2">SIZE</div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="text-xs text-gray-400">W</label>
                <input type="number" className="w-full border rounded px-2 py-1 text-sm" defaultValue="375" />
              </div>
              <div>
                <label className="text-xs text-gray-400">H</label>
                <input type="number" className="w-full border rounded px-2 py-1 text-sm" defaultValue="812" />
              </div>
            </div>
          </div>

          <div>
            <div className="text-xs text-gray-500 mb-2">FILL</div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-500 rounded border" />
              <span className="text-sm">#3B82F6</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sketch;

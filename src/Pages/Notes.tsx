const notes = [
  { id: 1, name: "Java OOPs Notes", type: "PDF", size: "2.4 MB" },
  { id: 2, name: "DSA Arrays Notes", type: "PDF", size: "1.8 MB" },
  { id: 3, name: "React Hooks Summary", type: "DOCX", size: "0.9 MB" },
  { id: 4, name: "Java Collections Framework", type: "PDF", size: "3.1 MB" },
  { id: 5, name: "DSA Sorting Algorithms", type: "DOCX", size: "1.2 MB" },
];

const Notes = () => {
  return (
    <div className="p-6 bg-bg min-h-screen">

      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">My notes</h1>
          <p className="text-sm text-text-secondary mt-1">All your saved notes in one place.</p>
        </div>
        <button className="bg-primary hover:bg-primary-hover text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2">
          ↑ Upload note
        </button>
      </div>

      <div className="flex items-center gap-3 bg-surface border border-border rounded-lg px-4 py-2.5 mb-4">
        <span className="text-text-secondary">🔍</span>
        <input
          type="text"
          placeholder="Search notes..."
          className="bg-transparent outline-none text-sm text-text-primary w-full"
        />
      </div>

      <div className="bg-surface border border-border rounded-xl overflow-hidden">
        {notes.map((note) => (
          <div key={note.id} className="flex items-center gap-4 px-5 py-4 border-b border-border last:border-none">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0 ${note.type === "PDF" ? "bg-[#FEE2E2] text-red-700" : "bg-[#DBEAFE] text-blue-700"}`}>
              {note.type === "PDF" ? "PDF" : "DOC"}
            </div>
            <div className="flex-1">
              <p className="text-sm text-text-primary">{note.name}</p>
              <p className="text-xs text-text-secondary mt-0.5">{note.type} • {note.size}</p>
            </div>
            <button className="w-8 h-8 rounded-lg border border-border flex items-center justify-center text-text-secondary hover:border-primary hover:text-primary">
              ↓
            </button>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Notes;
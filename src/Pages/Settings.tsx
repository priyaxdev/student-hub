const Settings = () => {
  return (
    <div className="bg-surface border border-border rounded-xl overflow-hidden">

      <p className="text-xs font-medium text-text-secondary px-5 pt-4 pb-2">Account</p>

      <div className="flex items-center gap-3 px-5 py-4 border-b border-border hover:bg-bg cursor-pointer">
        <div className="w-9 h-9 rounded-lg bg-[#EEF2FF] flex items-center justify-center text-primary">
          🔒
        </div>
        <div className="flex-1">
          <p className="text-sm text-text-primary">Change password</p>
          <p className="text-xs text-text-secondary">Update your account password</p>
        </div>
        <span className="text-text-secondary">›</span>
      </div>

      <div className="flex items-center gap-3 px-5 py-4 border-b border-border hover:bg-bg cursor-pointer">
        <div className="w-9 h-9 rounded-lg bg-[#EEF2FF] flex items-center justify-center text-primary">
          🔔
        </div>
        <div className="flex-1">
          <p className="text-sm text-text-primary">Notification settings</p>
          <p className="text-xs text-text-secondary">Manage your notifications</p>
        </div>
        <span className="text-text-secondary">›</span>
      </div>

      <div className="flex items-center gap-3 px-5 py-4 hover:bg-bg cursor-pointer">
        <div className="w-9 h-9 rounded-lg bg-[#EEF2FF] flex items-center justify-center text-primary">
          🎨
        </div>
        <div className="flex-1">
          <p className="text-sm text-text-primary">Theme preference</p>
          <p className="text-xs text-text-secondary">Light or dark mode</p>
        </div>
        <span className="text-text-secondary">›</span>
      </div>

    </div>
  );
};

export default Settings;
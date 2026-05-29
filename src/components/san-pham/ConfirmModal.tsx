interface ConfirmModalProps {
  isOpen: boolean;
  title: string;
  message: React.ReactNode;
  onCancel: () => void;
  onConfirm: () => void;
  confirmText?: string;
  cancelText?: string;
}

export default function ConfirmModal({
  isOpen,
  title,
  message,
  onCancel,
  onConfirm,
  confirmText = 'XÁC NHẬN',
  cancelText = 'HỦY',
}: ConfirmModalProps) {
  if (!isOpen) return null;

  return (
    <div className="cart-overlay" style={{ zIndex: 1050 }} onClick={onCancel}>
      <div className="confirm-modal" style={{ maxWidth: '550px', width: '95%', padding: '2.5rem', borderRadius: '20px', boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }} onClick={(e) => e.stopPropagation()}>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', borderBottom: '2px solid #f0f0f0', paddingBottom: '1rem', textAlign: 'center', color: '#14213d' }}>{title}</h3>
        <div className="confirm-modal-body" style={{ marginBottom: '2rem' }}>{message}</div>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <button 
            className="cta-btn" 
            style={{ flex: 1, backgroundColor: '#ccc' }} 
            onClick={onCancel}
          >
            {cancelText}
          </button>
          <button 
            className="clear-cart-btn" 
            style={{ flex: 1, marginBottom: 0 }} 
            onClick={onConfirm}
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
}

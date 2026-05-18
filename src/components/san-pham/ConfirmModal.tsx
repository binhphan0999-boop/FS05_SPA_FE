interface ConfirmModalProps {
  isOpen: boolean;
  title: string;
  message: string;
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
      <div className="confirm-modal" onClick={(e) => e.stopPropagation()}>
        <h3>{title}</h3>
        <p>{message}</p>
        <div style={{ display: 'flex', gap: '1rem' }}>
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

import React from 'react';
import { X, Download, Mail, MessageSquare } from 'lucide-react';
import type { Quote } from '../types/types';


interface QuoteDownloadModalProps {
  quote: Quote | null;
  onClose: () => void;
  onDownload: (quote: Quote) => void;
  onSendEmail: () => void;
  onSendWhatsApp: () => void;
}

const QuoteDownloadModal: React.FC<QuoteDownloadModalProps> = ({ quote, onClose, onDownload, onSendEmail, onSendWhatsApp }) => {
  if (!quote) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-md w-full p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Recevoir le devis</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="mb-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="text-2xl">{quote.logo}</div>
            <div>
              <h4 className="font-medium text-gray-900">{quote.insurer}</h4>
              <p className="text-sm text-gray-600">{quote.coverage}</p>
            </div>
          </div>
          <div className="bg-blue-50 rounded-lg p-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-700">Prime annuelle:</span>
              <span className="text-xl font-bold text-blue-600">{quote.price.toLocaleString()} FCFA</span>
            </div>
          </div>
        </div>
        <div className="space-y-3">
          <button
            onClick={() => {
              onDownload(quote);
              onClose();
            }}
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
          >
            <Download className="h-5 w-5" />
            <span>Télécharger le devis PDF</span>
          </button>

          <button
            onClick={() => {
              onSendEmail();
              onClose();
            }}
            className="w-full bg-gray-100 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center space-x-2"
          >
            <Mail className="h-5 w-5" />
            <span>Envoyer par Email</span>
          </button>

          <button
            onClick={() => {
              onSendWhatsApp();
              onClose();
            }}
            className="w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center space-x-2"
          >
            <MessageSquare className="h-5 w-5" />
            <span>Envoyer par WhatsApp</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuoteDownloadModal;

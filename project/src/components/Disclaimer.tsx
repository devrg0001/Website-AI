import React from 'react';
import { AlertTriangle } from 'lucide-react';

export default function Disclaimer() {
  return (
    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-4">
      <div className="flex items-start">
        <AlertTriangle className="h-5 w-5 text-yellow-400 mt-0.5" />
        <div className="ml-3">
          <h3 className="text-sm font-medium text-yellow-800">Medical Disclaimer</h3>
          <div className="mt-2 text-sm text-yellow-700">
            <p>
              This AI-powered analysis tool is for educational and preliminary screening purposes only. 
              It is not intended to replace professional medical advice, diagnosis, or treatment. 
              Always seek the advice of your physician or other qualified health provider with any 
              questions you may have regarding a medical condition.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
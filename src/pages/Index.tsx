
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);

  const showStep = (step: number) => {
    setCurrentStep(step);
  };

  const startAssessment = () => {
    navigate('/assessment');
  };

  const steps = [
    {
      id: 'background-1',
      title: '📖 Chapter 1: A Secret Love',
      content: (
        <div>
          <div className="text-center mb-4 sm:mb-6">
            <div style={{ background: 'linear-gradient(135deg, #ff9a9e, #fecfef)', borderRadius: '15px', padding: '30px', textAlign: 'center', boxShadow: '0 10px 25px rgba(255,154,158,0.3)', display: 'inline-block' }}>
              <div style={{ fontSize: '4em', marginBottom: '10px' }}>💕</div>
              <div style={{ fontSize: '0.9em', color: '#8e44ad', fontWeight: 600 }}>Young Love</div>
              <div style={{ fontSize: '0.8em', color: '#8e44ad', marginTop: '5px' }}>Computer Class<br />Secret Romance</div>
            </div>
          </div>
          <div>
            <p style={{ fontSize: '1.1em', lineHeight: 1.7, marginBottom: '15px' }}>You are a 16-year-old boy who fell in love with 16-year-old Ankita during computer class. Your relationship blossomed over shared dreams and late-night conversations about your future together.</p>
            <p style={{ fontSize: '1.1em', lineHeight: 1.7 }}>However, you both came from different castes, and you knew your families would never accept this relationship. For an entire year, you kept your love secret, meeting only at school and communicating through hidden messages.</p>
          </div>
        </div>
      )
    },
    {
      id: 'background-2',
      title: '⚡ Chapter 2: Discovery and Crisis',
      content: (
        <div>
          <div className="text-center mb-4 sm:mb-6">
            <div style={{ background: 'linear-gradient(135deg, #ff6b6b, #ee5a52)', borderRadius: '15px', padding: '30px', textAlign: 'center', boxShadow: '0 10px 25px rgba(255,107,107,0.3)', display: 'inline-block' }}>
              <div style={{ fontSize: '4em', marginBottom: '10px' }}>⛔</div>
              <div style={{ fontSize: '0.9em', color: 'white', fontWeight: 600 }}>Family Opposition</div>
              <div style={{ fontSize: '0.8em', color: 'white', marginTop: '5px' }}>Arranged Marriage<br />Threat</div>
            </div>
          </div>
          <div>
            <p style={{ fontSize: '1.1em', lineHeight: 1.7, marginBottom: '15px' }}>After a year, Ankita's family discovered your relationship. They were furious about the inter-caste nature of your love and immediately restricted Ankita's movements, taking away her phone and forbidding her from attending school.</p>
            <p style={{ fontSize: '1.1em', lineHeight: 1.7, color: '#e74c3c', fontWeight: 500, marginBottom: '20px' }}>They threatened to arrange her marriage with someone from their own caste within days. You both realized this was your last chance to be together.</p>
          </div>
          <div style={{ background: '#fff3cd', border: '2px solid #ffeaa7', borderRadius: '10px', padding: '20px' }}>
            <div>
              <p style={{ fontWeight: 600, color: '#856404', marginBottom: '5px' }}>Desperate Decision</p>
              <p style={{ color: '#856404' }}>Fearing separation forever, you and Ankita decided to elope and marry in a nearby temple, hoping your families would eventually accept your union.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'background-3',
      title: '⚖️ Chapter 3: Legal Consequences',
      content: (
        <div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px', marginBottom: '25px' }} className="sm:grid-cols-2">
            <div style={{ background: 'linear-gradient(135deg, #667eea, #764ba2)', borderRadius: '15px', padding: '25px', color: 'white', textAlign: 'center' }}>
              <div style={{ fontSize: '3em', marginBottom: '10px' }}>🚔</div>
              <div style={{ fontSize: '1.1em', fontWeight: 600, marginBottom: '10px' }}>Police Complaints Filed</div>
              <div style={{ fontSize: '0.9em', opacity: 0.9 }}>• Kidnapping<br />• POCSO Act<br />• Child Marriage</div>
            </div>
            <div style={{ background: 'linear-gradient(135deg, #f093fb, #f5576c)', borderRadius: '15px', padding: '25px', color: 'white', textAlign: 'center' }}>
              <div style={{ fontSize: '3em', marginBottom: '10px' }}>🏢</div>
              <div style={{ fontSize: '1.1em', fontWeight: 600, marginBottom: '10px' }}>3 Months Later</div>
              <div style={{ fontSize: '0.9em', opacity: 0.9 }}>• 5 JJB Appearances<br />• Observation Home<br />• Age Determination</div>
            </div>
          </div>
          <div style={{ background: '#f8f9fa', borderLeft: '5px solid #e74c3c', padding: '25px', borderRadius: '8px' }}>
            <p style={{ fontSize: '1.1em', lineHeight: 1.7, marginBottom: '15px' }}>Two weeks after your temple marriage, while buying groceries at the local shop, two police officers were waiting to apprehend you. You were taken to the police station and then produced before the Juvenile Justice Board.</p>
            <p style={{ fontSize: '1.1em', lineHeight: 1.7, marginBottom: '15px' }}>After 3 months in an Observation Home and 5 JJB appearances, the Board determines your age. Since POCSO charges are considered "heinous," they decide to conduct a Preliminary Assessment.</p>
            <div style={{ background: '#ffe6e6', border: '2px solid #ff9999', borderRadius: '8px', padding: '20px', marginTop: '20px' }}>
              <div className="text-center mb-3 sm:mb-0 sm:text-left">
                <div style={{ fontSize: '2.5em', marginBottom: '10px' }} className="text-center">🎓</div>
                <div>
                  <p style={{ color: '#2c3e50' }}><strong>The JJB tells you:</strong> "We have some questions for you. Just answer honestly - it will help your case move forward and after which bail can be granted!"</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 p-5">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="bg-gradient-to-r from-slate-800 to-slate-700 text-white p-8 text-center">
          <h1 className="text-4xl font-light mb-2">Juvenile Justice Interactive Scenario</h1>
          <p className="text-lg opacity-90 italic">An Educational Simulation About Preliminary Assessment Under Section 15 of the JJ Act</p>
          <p className="text-lg opacity-90 italic">by Enfold Proactive Health Trust (Beta Version)</p>
        </div>

        <div className="p-10">
          <div className="bg-gray-50 border-l-4 border-red-500 rounded-lg p-6 mb-8 shadow-lg">
            <div className="text-2xl font-semibold text-slate-800 mb-4">{steps[currentStep].title}</div>
            {steps[currentStep].content}
          </div>

          <div className="flex justify-between items-center pt-5 border-t-2 border-gray-200">
            {currentStep > 0 ? (
              <button 
                onClick={() => showStep(currentStep - 1)}
                className="px-8 py-3 bg-gray-500 text-white rounded-full hover:bg-gray-600 transform hover:-translate-y-1 transition-all duration-300 uppercase tracking-wider font-medium"
              >
                ← Previous
              </button>
            ) : <div></div>}
            
            {currentStep < steps.length - 1 ? (
              <button 
                onClick={() => showStep(currentStep + 1)}
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 uppercase tracking-wider font-medium"
              >
                Continue Story →
              </button>
            ) : (
              <button 
                onClick={startAssessment}
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 uppercase tracking-wider font-medium"
              >
                Begin Assessment →
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;

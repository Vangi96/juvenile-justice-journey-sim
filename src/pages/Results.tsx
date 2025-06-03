
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Results = () => {
  const navigate = useNavigate();
  const [isRetained] = useState(Math.random() < 0.28);

  const restartSimulation = () => {
    navigate('/');
  };

  const goToSystemicIssues = () => {
    navigate('/systemic-issues');
  };

  const openExternalLink = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 p-5">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="bg-gradient-to-r from-slate-800 to-slate-700 text-white p-8 text-center">
          <h1 className="text-4xl font-light mb-2">Juvenile Justice Interactive Scenario</h1>
          <p className="text-lg opacity-90 italic">Assessment Results</p>
          <p className="text-lg opacity-90 italic">by Enfold Proactive Health Trust (Beta Version)</p>
        </div>

        <div className="p-10">
          <div className="bg-green-50 border-2 border-green-200 rounded-xl p-5 mb-8 text-green-800">
            <p className="text-lg leading-relaxed">The POCSO Act, while protecting children, criminalises normative adolescent sexual behaviour by not recognising consent under 18. We chose this case for the simulation as many CICLs aged 16–18 were charged under POCSO, with a proportion of them being involved in romantic relationships.</p>
          </div>

          <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-5 mb-8 text-blue-900">
            <p className="text-lg leading-relaxed"><strong>This simulation is based on Enfold's analysis of the cases of Heinous Offences of CICLs who underwent a Preliminary Assessment.</strong> This case depicts only a certain type of case scenario, and does not cover all types of scenarios or questions asked. There are wide variations based on the district, resources and the type of case. The exercise also highlights how the Preliminary Assessment (PA) process is heavily shaped by the subjective judgments of the JJBs. It raises a broader concern as to whether it is even possible to develop an objective and reliable method to decide on the transfer or retention of the CICL. Given that this decision has grave consequences for the CICL, this subjectivity can be detrimental to the CICL's future.</p>
          </div>

          <div className={`rounded-xl p-8 text-white text-center mb-8 shadow-xl ${isRetained ? 'bg-gradient-to-r from-green-600 to-green-700' : 'bg-gradient-to-r from-red-500 to-red-600'}`}>
            <div className="text-3xl font-light mb-4">Assessment Complete</div>
            <p className="text-xl mb-4">Based on your Preliminary Assessment...</p>
            <h2 className="text-4xl my-5 font-normal">
              {isRetained ? 'You have been retained at the Juvenile Justice Board' : 'You have been transferred to the Adult Criminal Justice System'}
            </h2>
            <p className="text-xl mb-3">
              <strong>
                {isRetained 
                  ? 'Your case will continue to be handled under the juvenile justice system.' 
                  : 'If found guilty, the Children\'s Court can impose a minimum sentence of 10 years, as mandated under Section 4 of the POCSO Act.'
                }
              </strong>
            </p>
            <p className="text-sm opacity-90">
              {isRetained 
                ? 'You will remain in the observation home while your case proceeds through the JJB.'
                : 'As per the law, you will be kept in a place of safety until you turn 21. At that point, you will be assessed again to determine whether you have reformed, and based on that assessment, you may either be released or transferred to an adult prison.'
              }
            </p>
          </div>

          <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-6 mb-8">
            <div className="text-2xl font-semibold text-red-600 mb-4 cursor-pointer hover:text-red-800 transition-colors" onClick={goToSystemicIssues}>
              ⚖️ Systemic Issues in Section 15 Preliminary Assessment
            </div>
            <p className="text-gray-700 italic">Click above to explore the critical issues with the current system →</p>
          </div>

          {/* Resource Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <button
              onClick={() => openExternalLink('https://purple-word-60a.notion.site/What-is-a-Preliminary-Assessment-20722c20b53280efadd9f330677dae65')}
              className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 rounded-xl hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 text-center"
            >
              <div className="text-lg font-medium mb-2">📄 What is Preliminary Assessment</div>
              <div className="text-sm opacity-90">Learn about the PA process</div>
            </button>

            <button
              onClick={() => openExternalLink('https://purple-word-60a.notion.site/Voices-of-Children-in-Conflict-with-Law-20722c20b53280f38fbee04a81de1fe1?source=copy_link')}
              className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-4 rounded-xl hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 text-center"
            >
              <div className="text-lg font-medium mb-2">🗣️ Read Voices of CICL</div>
              <div className="text-sm opacity-90">Stories from affected youth</div>
            </button>

            <button
              onClick={() => openExternalLink('https://purple-word-60a.notion.site/Nonda-Manasu-A-Wounded-Heart-20722c20b53280fe90aedfa60de08694?source=copy_link')}
              className="bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-xl hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 text-center"
            >
              <div className="text-lg font-medium mb-2">📋 G's Testimony on JJ Bill</div>
              <div className="text-sm opacity-90">Submitted to MWCD</div>
            </button>
          </div>

          <div className="flex justify-between items-center pt-5 border-t-2 border-gray-200">
            <button 
              onClick={restartSimulation}
              className="px-8 py-3 bg-gray-500 text-white rounded-full hover:bg-gray-600 transform hover:-translate-y-1 transition-all duration-300 uppercase tracking-wider font-medium"
            >
              Restart Simulation
            </button>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;

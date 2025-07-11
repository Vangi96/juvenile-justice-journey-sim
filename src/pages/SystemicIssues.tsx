
import { useNavigate } from 'react-router-dom';

const SystemicIssues = () => {
  const navigate = useNavigate();

  const issues = [
    {
      title: "Lack of Information on Preliminary Assessment",
      description: "CICLs and their families are rarely informed that the JJB is conducting a Section 15 preliminary assessment and are not explained the implications of such a transfer; most are simply told to answer \"honestly\" and assured all will be fine.",
      icon: "📢"
    },
    {
      title: "Same Outcome Regardless of Responses",
      description: "In some JJBs, all types of responses—silence, correct answers, or unexpected ones—led to the same outcome of transfer, with silence being seen as being tutored by the lawyer.",
      icon: "🔄"
    },
    {
      title: "Transfers for Non-Heinous Offences",
      description: "Sometimes CICLs between the ages of 16-18 undergo a preliminary assessment and are transferred for allegedly committing non-heinous offences.",
      icon: "⚖️"
    },
    {
      title: "State-Wise Variation in Transfer Rates",
      description: "Transfer rates differ by states, with transfer being the default option in some States, while it is an exception in some states, indicating high subjectivity and variability in decision-making.",
      icon: "📊"
    },
    {
      title: "Limited Involvement of Defence Lawyers",
      description: "Defence Lawyers for CICLs were unaware of the Preliminary Assessment process and often did not object to the transfer or request the mental health report based on which the transfer was decided.",
      icon: "👨‍💼"
    },
    {
      title: "Key Documents to CICLs not provided",
      description: "JJBs often do not provide copies of documents such as the mental health assessment and the order on preliminary assessment, citing confidentiality, despite the Supreme Court clarifying that confidentiality is meant to limit public access and not that of the child or CICL's lawyer.",
      icon: "📋"
    },
    {
      title: "Mental Assistance Often Not Sought",
      description: "The Supreme Court in Barun Chandra Thakur v. Master Bholu (2022 SCC OnLine SC 870) made expert assistance mandatory for JJBs lacking child psychology professionals, but such assistance is often not sought. In many districts, such experts are not available or are not aware of what is expected from them under the JJ Act.",
      icon: "🧠"
    },
    {
      title: "Superficial Mental Health Assessment reports",
      description: "Mental health assessment reports are often very brief, merely stating that the CICL is normal and \"does not have a mental illness\", and has the ability to understand the consequences of the offence, without mentioning the reasoning for the same.",
      icon: "🏥"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 p-3 sm:p-5">
      <div className="max-w-6xl mx-auto bg-white rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden">
        <div className="bg-gradient-to-r from-slate-800 to-slate-700 text-white p-4 sm:p-8 text-center">
          <h1 className="text-2xl sm:text-4xl font-light mb-2">⚖️ Systemic Issues in Section 15 Preliminary Assessment</h1>
          <p className="text-base sm:text-lg opacity-90 italic">Critical Problems with the Current System</p>
          <p className="text-base sm:text-lg opacity-90 italic">by Enfold Proactive Health Trust (Beta Version)</p>
        </div>

        <div className="p-4 sm:p-10">
          <div className="grid grid-cols-1 gap-4 sm:gap-6 mb-6 sm:mb-8">
            {issues.map((issue, index) => (
              <div key={index} className="bg-white border-2 border-gray-200 rounded-lg sm:rounded-xl p-4 sm:p-6 hover:border-blue-400 hover:shadow-lg transition-all duration-300 active:bg-gray-50">
                <div className="text-center mb-3 sm:mb-4">
                  <div className="text-4xl sm:text-5xl mb-2">{issue.icon}</div>
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-800 mb-2 sm:mb-3 leading-tight">{issue.title}</h3>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{issue.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <button 
              onClick={() => navigate('/results')}
              className="w-full sm:w-auto px-6 sm:px-8 py-4 sm:py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full hover:shadow-lg active:bg-blue-700 transition-all duration-300 uppercase tracking-wider font-medium text-sm sm:text-base touch-manipulation"
            >
              ← Back to Results
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemicIssues;

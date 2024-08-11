import { useState } from 'react';
import InputBox from './components/InputBox';
import useCurrencyInfo from './hooks/useCurrencyInfo';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('inr');
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div className="App">
      <Navbar />
      <div className="mt-14 w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat">
        <div className="w-full">
          <div id='currency-exhanger' className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                convert();
              }}
            >
              <div className="w-full mb-1">
                <InputBox
                  label="From"
                  amount={amount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setFrom(currency)}
                  selectCurrency={from}
                  onAmountChange={(amount) => setAmount(amount)}
                />
              </div>
              <div className="relative w-full h-0.5">
                <button
                  type="button"
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                  onClick={swap}
                >
                  Swap
                </button>
              </div>
              <div className="w-full mt-1 mb-4">
                <InputBox
                  label="To"
                  amount={convertedAmount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setTo(currency)}
                  selectCurrency={to}
                  amountDisable
                />
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                Convert {from.toUpperCase()} to {to.toUpperCase()}
              </button>
            </form>
          </div>
          <div id='about' className="w-full max-w-md mx-auto mt-8 bg-gray-700 text-white p-5 rounded-lg">
            <h2 className="text-lg font-semibold mb-4">Welcome!</h2>
            <p>
              We understand that navigating the complexities of international currencies can be challenging. That’s why we’ve created a sophisticated yet user-friendly currency converter designed to make your financial transactions seamless and efficient. Whether you're a frequent traveler, an online shopper, or a business dealing with global transactions, our tool is here to simplify the process of converting currencies.
            </p>
            <ul className="list-disc list-inside mt-4">
              <li><strong>Real-Time Exchange Rates:</strong> Stay informed with the most up-to-date conversion rates. Our currency converter pulls data from reliable financial sources to ensure you receive accurate and timely information.</li>
              <li><strong>Comprehensive Currency Support:</strong> With support for a wide range of global currencies, our tool caters to diverse needs. Whether you’re converting between major currencies like USD, EUR, and GBP, or lesser-known ones, we’ve got you covered.</li>
              <li><strong>Intuitive Interface:</strong> Designed with user experience in mind, our converter features an intuitive interface that makes it easy to perform conversions quickly. Just input your amount, select the currencies, and get your results in seconds.</li>
              <li><strong>Responsive Design:</strong> Our website is fully optimized for all devices, including desktops, tablets, and smartphones. Enjoy a consistent experience no matter where you are or what device you’re using.</li>
              <li><strong>Secure and Reliable:</strong> We prioritize your privacy and the accuracy of our data. Rest assured that your information is handled securely and the conversion rates you receive are based on the latest market data.</li>
            </ul>
            <p className="mt-4">
              Whether you’re making travel plans, handling international business, or simply curious about currency fluctuations, our tool is your go-to resource. Experience the convenience of accurate and real-time currency conversions with just a few clicks.
            </p>
            <p className="mt-4">
              We’re here to make currency conversion effortless and precise.
            </p>
            <h3 className="text-lg font-semibold mt-6 mb-4">International Standards for Currency Conversion</h3>
            <p>
              Our currency converter adheres to international standards to ensure accuracy and reliability in financial transactions across different currencies. Here are some key standards and practices:
            </p>
            <ul className="list-disc list-inside mt-4">
              <li><strong>ISO 4217 Currency Codes:</strong> Defines three-letter codes for each currency to facilitate international trade and finance (e.g., USD, EUR, JPY).</li>
              <li><strong>Exchange Rate Benchmarks:</strong> Conversion rates are based on market rates from banks, central banks, and financial markets, including spot and forward rates.</li>
              <li><strong>Exchange Rate Providers:</strong> Rates are sourced from central banks, financial market data providers like Bloomberg and Reuters, and currency conversion services.</li>
              <li><strong>Regulatory Compliance:</strong> Ensures adherence to anti-money laundering (AML) and know your customer (KYC) regulations.</li>
              <li><strong>Accounting Standards:</strong> Follows IFRS 21 and GAAP for accurate reporting of foreign currency transactions.</li>
              <li><strong>Currency Conversion Methods:</strong> Includes direct and indirect quotations to reflect currency exchange rates accurately.</li>
              <li><strong>Consumer Protection:</strong> Transparent fees and fair practices are implemented to protect consumers in currency conversion transactions.</li>
              <li><strong>International Standards Organizations:</strong> Compliance with standards from ISO, BIS, and other organizations to ensure global consistency and reliability.</li>
            </ul>
            <p className="mt-4">
              By adhering to these international standards, we ensure that our currency conversion tool delivers accurate and reliable results, making your financial transactions seamless and efficient.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
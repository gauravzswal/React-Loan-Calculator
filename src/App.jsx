import { useState } from "react";
import { FaRupeeSign } from "react-icons/fa";

function App() {
  const [data, setData] = useState({
    homeValue: 500,
    downPayment: 100,
    loanAmount: 400,
    interestRate: 5,
    tenure: 1,
  });

  const principal = data.homeValue - data.downPayment;
  const totalMonths = data.tenure * 12;
  const interestPerMonth = data.interestRate / 100 / 12;

  const monthlyPayment =
    interestPerMonth === 0
      ? principal / totalMonths
      : Math.floor(
          (principal *
            interestPerMonth *
            Math.pow(1 + interestPerMonth, totalMonths)) /
            (Math.pow(1 + interestPerMonth, totalMonths) - 1)
        );

  return (
    <div className=" ">
      <h1 className="text-2xl font-bold w-full flex items-center justify-center pt-8 pb-8 bg-black text-white shadow-2xl">Loan Calculator</h1>
      <div className="flex">
        <div className="flex flex-row">
          <div className="p-4 space-y-6">
            {/* Home Value */}
            <div className="w-[40vw] border-2 p-4 rounded">
              <h3 className="font-semibold mb-2">Home Value</h3>
              <h1 className="flex items-center text-xl font-medium mb-2">
                <FaRupeeSign className="mr-1" />
                {data.homeValue}
              </h1>
              <input
                className="w-full"
                type="range"
                min={1000}
                max={10000}
                value={data.homeValue}
                onChange={(e) =>
                  setData({ ...data, homeValue: Number(e.target.value) })
                }
              />
              <div className="flex justify-between mt-2">
                <span className="flex items-center">
                  <FaRupeeSign className="mr-1" /> 1000
                </span>
                <span className="flex items-center">
                  <FaRupeeSign className="mr-1" /> 10000
                </span>
              </div>
            </div>

            {/* Down Payment */}
            <div className="w-[40vw] border-2 p-4 rounded">
              <h3 className="font-semibold mb-2">Down Payment</h3>
              <h1 className="flex items-center text-xl font-medium mb-2">
                <FaRupeeSign className="mr-1" />
                {data.downPayment}
              </h1>
              <input
                className="w-full"
                type="range"
                min={0}
                max={data.homeValue}
                value={data.downPayment}
                onChange={(e) =>
                  setData({ ...data, downPayment: Number(e.target.value) })
                }
              />
              <div className="flex justify-between mt-2">
                <span className="flex items-center">
                  <FaRupeeSign className="mr-1" /> 0
                </span>
                <span className="flex items-center">
                  <FaRupeeSign className="mr-1" /> {data.homeValue}
                </span>
              </div>
            </div>

            {/* Loan Amount */}
            <div className="w-[40vw] border-2 p-4 rounded">
              <h3 className="font-semibold mb-2">Loan Amount</h3>
              <h1 className="flex items-center text-xl font-medium mb-2">
                <FaRupeeSign className="mr-1" />
                {data.homeValue - data.downPayment}
              </h1>
              <input
                className="w-full"
                type="range"
                min={0}
                max={data.homeValue}
                value={data.homeValue - data.downPayment}
                onChange={(e) =>
                  setData({ ...data, loanAmount: Number(e.target.value) })
                }
              />
              <div className="flex justify-between mt-2">
                <span className="flex items-center">
                  <FaRupeeSign className="mr-1" /> 0
                </span>
                <span className="flex items-center">
                  <FaRupeeSign className="mr-1" /> {data.homeValue}
                </span>
              </div>
            </div>

            {/* Interest Rate */}
            <div className="w-[40vw] border-2 p-4 rounded">
              <h3 className="font-semibold mb-2">Interest Rate (%)</h3>
              <h1 className="flex items-center text-xl font-medium mb-2">
                {data.interestRate}%
              </h1>
              <input
                className="w-full"
                type="range"
                min={1}
                max={15}
                step={0.1}
                value={data.interestRate}
                onChange={(e) =>
                  setData({ ...data, interestRate: Number(e.target.value) })
                }
              />
              <div className="flex justify-between mt-2">
                <span>1%</span>
                <span>15%</span>
              </div>
            </div>

            <div className="w-[40vw] rounded">
              <select
                name=""
                id=""
                className="w-full p-4 border-2 rounded"
                onChange={(e) =>
                  setData({ ...data, tenure: Number(e.target.value) })
                }
                value={data.tenure}
              >
                <option value="1">1 Years</option>
                <option value="2">2 Years</option>
                <option value="3">3 Years</option>
                <option value="4">4 Years</option>
                <option value="5">5 Years</option>
              </select>
            </div>
          </div>
        </div>

        <div className="pl-20 pt-20 flex items-center h-[30vh] w-[50vw] justify-center text-4xl">
          <span>Monthly EMI</span>
          <FaRupeeSign className="mr-1" />
          {monthlyPayment}
        </div>
      </div>
    </div>
  );
}

export default App;

import CTAButton from "../components/ctaButton";


export default function Pricing() {

    return (

        <main className="mx-4 lg:w-[90%] pb-8 lg:pb-2 lg:h-[700px] bg-dark lg:m-auto rounded-tl-[16px] rounded-[16px] relative shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
            <div className="flex flex-col items-center">

                <div className="lg:w-[15%]">
                    <h3 className="pt-8 bg-white text-dark font-extrabold text-[36px] text-center mb-12">Pricing</h3>
                </div>

                <table className="w-[90%] lg:w-[50%] border-collapse">
                    <thead className="text-[16px] lg:text-[24px]">
                        <tr>
                            <th className="border-2 border-blue-500 bg-gray-100 p-4">Course</th>
                            <th className="border-2 border-blue-500 bg-gray-100 p-4">Description</th>
                            <th className="border-2 border-blue-500 bg-gray-100 p-4">Price</th>
                        </tr>
                    </thead>
                    <tbody className="text-[10px] lg:text-[16px]">
                        <tr>
                            <td className="border border-blue-500 p-4">Data Structure and Algorithms</td>
                            <td className="border border-blue-500 p-4">3 days a week live classes, notes, and live class recordings.</td>
                            <td className="border border-blue-500 p-4">$99</td>
                        </tr>
                        <tr>
                            <td className="border border-green-500 p-4">Android App Development</td>
                            <td className="border border-green-500 p-4">3 days a week live classes, notes, and live class recordings.</td>
                            <td className="border border-green-500 p-4">$129</td>
                        </tr>
                        <tr>
                            <td className="border border-red-500 p-4">Web App Development</td>
                            <td className="border border-red-500 p-4">3 days a week live classes, notes, and live class recordings.</td>
                            <td className="border border-red-500 p-4">$149</td>
                        </tr>
                    </tbody>
                </table>


                <div className="pt-8 flex flex-col justify-center">
                    <p>See, It's that simple!</p>

                </div>
                <div className="pt-8 m-auto flex items-center justify-center">
                    <CTAButton title={"Enroll now"} color={"orange"}></CTAButton>
                </div>
            </div>


        </main>

    );
}
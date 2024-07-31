// src/components/Programs.jsx
import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext.jsx';
import private1v1 from '../assets/images/program_images/1V1.png';
import tickets from '../assets/images/program_images/tickets.png';
import monthly from '../assets/images/program_images/monthly.png';
import yearly from '../assets/images/program_images/yearly.png';
import equipment from '../assets/images/program_images/quarter.png';
import threeMonths from '../assets/images/program_images/3months.png';
import newRegister from '../assets/images/program_images/new.png';


const Programs = () => {
    const { language, toggleLanguage } = useLanguage();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="flex flex-col min-h-screen px-4 mt-28">
            <div className="max-w-3xl mx-auto text-left p-4 w-full h-auto text-black justify-center items-center">
                {language === 'EN' ? (
                    <>

                        <h1 className="text-lg md:text-2xl lg:text-4xl mb-4 font-bold bg-white text-center text-orange-600 
                        p-4 block rounded-full">
                            Our Programs</h1>

                        <span className="text-sm lg:text-1xl text-lg">

                            To reach us please fill up the join us form with email, name, phone, and a message for
                            any program you are interested to join.
                            No money will be handled on this website. All transactions will be done
                            either face to face, via e-transfer, or WeChat.
                            <br /> <br />
                            Feel free to contact us for any inquiries!
                        </span>
                    </>

                ) : (
                    <>
                        <h1 className="text-lg md:text-2xl lg:text-4xl mb-4 font-bold bg-white text-center 
                        text-orange-600 p-4 block rounded-full">
                            我们的项目</h1>
                        <span className="text-xs md:text-sm lg:text-1xl text-lg">

                            想要联系我们，请填写加入我们的表格，包括电子邮件、姓名、电话和您感兴趣的项目的留言。这个网站上不会处理任何资金。所有交易都将面对面、通过电子转账或微信完成。
                            <br /> <br />
                            如有任何疑问，请随时联系我们！
                        </span>
                    </>
                )}

            </div>

            <div className="text-black text-xs md:text-sm md:text-lg lg:text-xl">
                <div className="max-w-3xl mx-auto my-4">
                    {language === 'EN' ? (
                        <>
                            <div className="flex items-center space-x-4">
                                <img src={tickets} alt="icon" className="w-auto h-16 object-cover" />
                                <span className="font-bold">Single pass: $650 (10 sessions)</span>
                            </div>
                            <ul className="list-disc list-inside">
                                <li>$65/session, minimum purchase 10 sessions</li>
                                <li>Include dry-land training and on ice skating training</li>
                                <li>Include facility fees for all the training, free skate shoes rent, security deposit $300*</li>
                            </ul>
                            <br />
                            <div className="flex items-center space-x-4">
                                <img src={monthly} alt="icon" className="w-auto h-20 object-cover" />
                                <span className="font-bold">Monthly pass: $550</span>
                            </div>
                            <ul className="list-disc list-inside">
                                <li>2-3 training sessions per week / 9-12 sessions in total**</li>
                                <li>Include dry-land training and on ice skating training</li>
                                <li>Include facility fees, free skate shoes rent, security deposit $300*</li>
                            </ul>
                            <br />
                            <div className="flex items-center space-x-4">
                                <img src={threeMonths} alt="icon" className="w-auto h-14 object-cover" />
                                <span className="font-bold">Quarterly pass: $1500</span>
                            </div>
                            <ul className="list-disc list-inside">
                                <li>3 months, 2-3 training sessions per week / 28-36 sessions in total**</li>
                                <li>Include dry-land training and on ice skating training</li>
                                <li>Include facility fees, free skate shoes rent, security deposit $300*</li>
                                <li>Free club helmet as sign up gift</li>
                            </ul>
                            <br />
                            <div className="flex items-center space-x-4">
                                <img src={yearly} alt="icon" className="w-16 h-auto object-cover" />
                                <span className="font-bold">Yearly pass: $3500</span>
                            </div>
                            <ul className="list-disc list-inside">
                                <li>September to March, 2-3 training sessions per week**</li>
                                <li>Include dry-land training and on ice skating training</li>
                                <li>Include facility fees, free skate shoes, security deposit $300*</li>
                            </ul>
                            <br />
                            <div className="flex items-center space-x-4">
                                <img src={private1v1} alt="icon" className="w-auto h-12 object-cover" />
                                <span className="font-bold">1V1 private session: $150/hr</span>
                            </div>
                            <ul className="list-disc list-inside">
                                <li>Student choice of dry-land training or on ice skating training</li>
                                <li>Only the Coach fee, not including the facility fees</li>
                                <li>Free skate shoes rent, no deposit fee needed</li>
                            </ul>
                            <br />
                            <div className="flex items-center space-x-4">
                                <img src={newRegister} alt="icon" className="w-auto h-16 object-cover" />
                                <span className="font-bold">New students register: $20</span>
                            </div>
                            <ul className="list-disc list-inside">
                                <li>Include Welcome Package + 1 free trial + Head Coach Consultation</li>
                                <li>Include facility fees, free skate shoes rent, no deposit fee needed</li>
                            </ul>
                            <br />
                            <div className="flex items-center space-x-4">
                                <img src={equipment} alt="icon" className="w-auto h-14 object-cover" />
                                <span className="font-bold">Available equipment to purchase:</span>
                            </div>
                            <ul className="list-disc list-inside">
                                <li>Protection package $80 (include cut-proof gloves, cut-proof neck guard, cut-proof ankle guard).</li>
                                <li>High performance short track speed skates $650</li>
                                <li>Club helmet $100</li>
                                <li>Club Skating Suit $100</li>
                            </ul>
                            <br />
                            <p className="text-xs text-gray-400 mt-4">
                                *Security deposit for equipment is used to cover the cost of skate shoes and blades in the event of loss and damage. Full deposit will be refunded upon return of skate shoes, blades, and skate guards in their original condition. Normal wear and tear will not result in deduction of deposit.
                            </p>
                        </>
                    ) : (
                        <>
                            <div className="flex items-center space-x-4">
                                <img src={tickets} alt="icon" className="w-auto h-16 object-cover" />
                                <span className="font-bold">单次通行证：$650 (共10次课)</span>
                            </div>
                            <ul className="list-disc list-inside">
                                <li>$65/次，10次起售</li>
                                <li>包含旱地训练和滑冰训练</li>
                                <li>包含所有训练的场地及设施费，免费提供滑冰鞋使用，押金 $300*</li>
                            </ul>
                            <br />
                            <div className="flex items-center space-x-4">
                                <img src={monthly} alt="icon" className="w-auto h-20 object-cover" />
                                <span className="font-bold">月票：$550</span>
                            </div>
                            <ul className="list-disc list-inside">
                                <li>每周 2-3 节训练/总共 9-12节**</li>
                                <li>包含旱地训练和滑冰训练</li>
                                <li>包含所有训练的场地及设施费，免费提供滑冰鞋使用，押金 $300*</li>
                            </ul>
                            <br />
                            <div className="flex items-center space-x-4">
                                <img src={threeMonths} alt="icon" className="w-auto h-14 object-cover" />
                                <span className="font-bold">季票：$1500</span>
                            </div>
                            <ul className="list-disc list-inside">
                                <li>3个月，每周2-3节训练/总共28-36节**</li>
                                <li>包含旱地训练和滑冰训练</li>
                                <li>包含所有训练的场地及设施费，免费提供滑冰鞋使用，押金 $300*</li>

                            </ul>
                            <br />
                            <div className="flex items-center space-x-4">
                                <img src={yearly} alt="icon" className="w-16 h-auto object-cover" />
                                <span className="font-bold">年票：$3500 </span>
                            </div>
                            <ul className="list-disc list-inside">
                                <li>九月至三月，每周2-3次训练*</li>
                                <li>包含旱地训练和滑冰训练</li>
                                <li>包含所有训练的场地及设施费，免费提供滑冰鞋使用，押金 $300*</li>
                                <li>Free club helmet + club skate suit as sign up gift</li>
                            </ul>
                            <br />
                            <div className="flex items-center space-x-4">
                                <img src={private1v1} alt="icon" className="w-auto h-12 object-cover" />
                                <span className="font-bold">1V1 私人课程：$150 /小时</span>
                            </div>
                            <ul className="list-disc list-inside">
                                <li>学生可选择旱地训练或滑冰训练</li>
                                <li>仅包含教练费，不包含训练的场地及设施费</li>
                                <li>免费提供滑冰鞋使用，无需押金</li>
                            </ul>
                            <br />
                            <div className="flex items-center space-x-4">
                                <img src={newRegister} alt="icon" className="w-auto h-16 object-cover" />
                                <span className="font-bold">新生注册：$20</span>
                            </div>
                            <ul className="list-disc list-inside">
                                <li>包括新生欢迎礼包+1次免费试课+主教练咨询</li>
                                <li>包括所有训练的场地及设施费，免费提供滑冰鞋使用，无需押金。</li>
                            </ul>
                            <br />
                            <div className="flex items-center space-x-4">
                                <img src={equipment} alt="icon" className="w-auto h-14 object-cover" />
                                <span className="font-bold">可供购买的设备：</span>
                            </div>
                            <ul className="list-disc list-inside">
                                <li>防护套装$80（包括防切割手套、防切割护颈、防切割护踝）</li>
                                <li>高性能短道速滑鞋 $650</li>
                                <li>俱乐部头盔 $100</li>
                                <li>俱乐部滑冰服 $100</li>
                            </ul>
                            <br />
                            <p className="text-xs text-gray-400 mt-4">
                                *设备押金$300 用于支付冰鞋和刀片丢失或损坏时的费用。冰鞋、冰刀和冰鞋防护罩按其原始状态归还后，将全额退还押金。 正常磨损不会导致押金被扣除。
                                ** 由于法定假日或重大事件导致设施不可用，培训计划可能会更改或取消。
                                注：因自身原因缺课，课时费概不退还。
                            </p>
                        </>
                    )}
                </div>
            </div>

        </div>


    );
};

export default Programs;
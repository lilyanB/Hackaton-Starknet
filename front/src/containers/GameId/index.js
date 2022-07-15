import { useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { stark } from "starknet"
import { ThemeContext } from 'contexts/theme'
import { useFormik } from 'formik';
import { baseUrl, exercices } from '../../constants'



async function submitGame({ gameId, account, submissionValue }) {

    const { address } = exercices[gameId - 1];
    // Check if connection was successful
    // if (starknet.isConnected) {
    // If the extension was installed and successfully connected, you have access to a starknet.js Signer object to do all kinds of requests through the user's wallet contract.
    if (account) {
        const response = await account.execute(
            {
                contractAddress:
                    address.toLowerCase(), // fee token address on devnet
                entrypoint: "submit_answer",
                calldata: stark.compileCalldata({
                    answer: submissionValue
                }),
            }
        )
        await account.waitForTransaction(response.transaction_hash, 1e3)
    } else {
        alert("Please connect wallet.")
    }

    // } else {
    //     // In case the extension wasn't successfully connected you still have access to a starknet.js Provider to read starknet states and sent anonymous transactions
    //     starknet.provider.callContract(... )
    // }

}

const SubmitForm = ({ account, gameId }) => {
    // Pass the useFormik() hook initial form values and a submit function that will
    // be called when the form is submitted

    const formik = useFormik({
        initialValues: {
            submission_value: '',
        },
        onSubmit: ({ submission_value: submissionValue }) => {
            submitGame({ gameId, account, submissionValue })
        },
    });

    return (
        <form onSubmit={formik.handleSubmit} className="flex flex-col space-y-4 w-full border-2 border-rose-500">
            {/* <label htmlFor="email">Email Address</label> */}
            <div>
                <input
                    id="submission_value"
                    name="submission_value"
                    type="text"
                    placeholder='Enter value...'
                    onChange={formik.handleChange}
                    value={formik.values.submission_value}
                    className="w-full py-3 px-4 rounded-full border-2 border-indigo-500"
                    style={{ border: "2px solid var(--clr-fg)" }}
                />
            </div>
            <button type="submit" className=' w-full rounded-full font-bold text-2xl py-2' style={{ backgroundColor: 'var(--clr-fg)', color: 'var(--clr-bg)' }}>
                Submit
            </button>
        </form>
    );
};



const GameId = ({ account }) => {
    const navigage = useNavigate();
    const [{ themeName }] = useContext(ThemeContext)
    const { gameId } = useParams();
    const exo = exercices[gameId - 1];
    return (
        <main className='flex flex-col'>
            <h2 className='w-full py-4'>
                Your progress
            </h2>
            <div className='w-full relative py-4'>
                <div className="absolute top rounded-full h-4 bg-gray-500 w-full" />
                <div className='absolute top rounded-full h-4 bg-teal-500' style={{ width: `${(gameId) / 4 * 100}%` }} />
                {/* <div className={`absolute top rounded-full h-4 bg-teal-500 w-${gameId - 1}/4`} /> */}
            </div>
            <div className='py-8'>
                <h3 className='py-4'>
                    GAME {gameId} - {exo.description}
                </h3>
                <div className='w-full flex flex-col md:flex-row md:space-x-10'>
                    <div className='w-full md:w-1/2 flex flex-col space-y-4'>
                        <h4 className='w-full block py-2'>{exo.description}</h4>
                        <p>
                            {exo.question}
                        </p>
                        <p className="">
                            Use this adress in Voyager : <span className="block w-full overflow-hidden text-ellipsis px-2 rounded-full bg-gray-900 hover:bg-gray-800 select-all cursor-pointer" style={{ width: "" }}>{exo.address}</span>
                        </p>
                        {exo.img ? <img src={exo.img} alt="question-asset" /> : null}
                    </div>
                    <div className='w-full md:w-1/2 center flex-col'>
                        <h4 className='block py-2 m-auto'>Do you have the answer?</h4>
                        <SubmitForm account={account} gameId={gameId} />
                        <div className='flex flex-row w-full space-x-10 py-8'>
                            <div className='flex flex-row'>
                                {/* <div className='w-full h-full py-4'>
                                    <div className=" top rounded-full h-4 bg-gray-500 w-full" />
                                    <div className=" top rounded-full h-4 bg-teal-500 w-1/4" />
                                </div> */}
                                <img src={`${baseUrl}/g12.svg`} alt="fren-level-0" />

                            </div>
                            <div className='flex-grow py-8'>
                                <h5 className='py-2'>Key words:</h5>
                                <ul className='list-disc px-4'>
                                    {exo.stack.map((answer) => {
                                        console.log("Entered");
                                        // Return the element. Also pass key     
                                        return (<li> {answer} </li>)
                                    })}
                                </ul>
                                <p>
                                    <button type="button" className='link' onClick={() => {
                                        const next = Number(gameId) + 1
                                        if (next > 4) {
                                            navigage(`/game/starknet`)
                                        } else {
                                            navigage(`/game/starknet/${next}`)
                                        }
                                    }}>Next game</button>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default GameId

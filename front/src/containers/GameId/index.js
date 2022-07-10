import { useContext } from 'react'
import { ThemeContext } from 'contexts/theme'
import { useFormik } from 'formik';
import { baseUrl } from '../../constants'

const SignupForm = () => {
    // Pass the useFormik() hook initial form values and a submit function that will
    // be called when the form is submitted
    const formik = useFormik({
        initialValues: {
            submission_value: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
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
                Yes FREN
            </button>
        </form>
    );
};



const GameId = () => {
    const [{ themeName }] = useContext(ThemeContext)

    return (
        <main className='container flex flex-col'>
            <h2 className='w-full py-4'>
                Help FREN become Starkpilled
            </h2>
            <div className='w-full relative py-4'>
                <div className="absolute top rounded-full h-4 bg-gray-500 w-full" />
                <div className="absolute top rounded-full h-4 bg-teal-500 w-1/4" />
            </div>
            <div className='py-8'>
                <h3 className='py-4'>
                    GAME 1 - Enigma
                </h3>
                <div className='w-full flex flex-row space-x-10'>
                    <div className='w-1/2 flex flex-col'>
                        <h4 className='w-full block py-2'>What are ASCII and hexadecimal ?</h4>
                        <p>
                            Eiusmod dolor aliquip nostrud nisi consequat ipsum esse ut nulla consequat eiusmod fugiat laboris. Nisi laboris cillum ea occaecat in cillum pariatur fugiat incididunt. Duis cupidatat reprehenderit pariatur labore eiusmod sit laborum et amet. Cupidatat do non culpa eiusmod aute ad pariatur ullamco amet ad id incididunt adipisicing excepteur. Laborum incididunt consequat aute voluptate velit.
                        </p>
                    </div>
                    <div className='w-1/2 center flex-col'>
                        <h4 className='block py-2 m-auto'>Do you have the answer?</h4>
                        <SignupForm />
                        <div className='flex flex-row w-full space-x-10 py-8'>
                            <div className='flex flex-row'>
                                {/* <div className='w-full h-full py-4'>
                                    <div className=" top rounded-full h-4 bg-gray-500 w-full" />
                                    <div className=" top rounded-full h-4 bg-teal-500 w-1/4" />
                                </div> */}
                                <img src={`${baseUrl}/g12.svg`} alt="fren-level-0" />

                            </div>
                            <div className='flex-grow py-8'>
                                <h5 className='py-2'>Your FREN attributes:</h5>
                                <ul className='list-disc px-4'>
                                    <li>
                                        Kameha
                                    </li>
                                    <li>
                                        Lorem
                                    </li>
                                    <li>
                                        Ipsum
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default GameId

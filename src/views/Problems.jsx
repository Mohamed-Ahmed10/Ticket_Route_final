/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"

export default function Problems() {
    let { t } = useTranslation();

    let [problems, setProblems] = useState(localStorage.getItem("data") ? JSON.parse(localStorage.getItem("data")) : [])

    useEffect(() => {
        // setProblem()
        console.log(problems)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div className="wrapper">
            <h2 className="mt-3 mb-4 text-center">{t('customers_complains')}</h2>
            <ol role="list">
                {problems.length > 0
                    ?
                    problems.map((problem, index) =>
                        <li key={index} className="justify-content-evenly">
                            <div className="text-center">
                                <h4>{problem.name}</h4>
                                <h5>{problem.email}</h5>
                                <p>{problem.message}</p>
                            </div>
                        </li>
                    )
                :
                <h3 className="text-center">{t('no_problems')}</h3>
                }
            </ol>
        </div>
    )
}

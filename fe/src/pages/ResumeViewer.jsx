import React, { useState } from 'react'
import { data, useParams } from 'react-router-dom'
import UserDataField from './UserDataField'
import AtlanticTemplate from '../templates/AtlanticTemplate'
import ExecutiveTemplate from '../templates/ExecutiveTemplate'

const ResumeViewer = () => {
    const { id } = useParams()
    const [resumeData, setResumeData] = useState(null)

    const renderTemplate = () => {
        switch (id) {
            case "atlantic":
                return <AtlanticTemplate user={resumeData} />
            case "executive":
                return <ExecutiveTemplate user={resumeData} />
            default:
                return <div>select a template</div>
        }
    }

    return (
        <div className="grid grid-cols-12 gap-2">
            <div className="col-span-4">
                <UserDataField onChange={(data) => setResumeData(data)} />
            </div>

            <div className="col-span-8">
                {renderTemplate()}
            </div>
        </div>

    )
}

export default ResumeViewer
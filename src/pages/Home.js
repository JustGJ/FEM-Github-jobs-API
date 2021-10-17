import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import JobCard from '../components/JobCard';
import jobs from '../assets/data.json';

const Home = ({ darkMode, setDarkMode, openModal, setOpenModal }) => {
    const data = jobs;
    const [title, setTitle] = useState('');
    const [location, setLocation] = useState('');
    const [fullTime, setFullTime] = useState(false);
    const [final, setFinal] = useState({ title: '', location: '', fullTime: '' });

    // == Search Final
    const finalSearch = async (e) => {
        e.preventDefault();
        setFinal({
            title: title,
            location: location,
            fullTime: fullTime ? 'on' : 'off',
        });
        setTitle('');
        setLocation('');
        setFullTime('');
    };

    // == Reset filter
    const handleResetFilter = (title, location, fullTime) => {
        setFinal({
            title: title,
            location: location,
            fullTime: fullTime,
        });
    };

    return (
        <div className="home__page">
            <SearchBar
                darkMode={darkMode}
                setDarkMode={setDarkMode}
                title={title}
                location={location}
                fullTime={fullTime}
                setTitle={setTitle}
                setLocation={setLocation}
                setFullTime={setFullTime}
                openModal={openModal}
                setOpenModal={setOpenModal}
                finalSearch={finalSearch}
            />

            <div className="page__filter">
                {final.title && (
                    <span onClick={() => handleResetFilter('', final.location, final.fullTime)}>
                        {final.title + ' x'}
                    </span>
                )}
                {final.location && (
                    <span onClick={() => handleResetFilter(final.title, '', final.fullTime)}>
                        {final.location + ' x'}
                    </span>
                )}
                {final.fullTime === 'on' && (
                    <span onClick={() => handleResetFilter(final.title, final.location, 'off')}>
                        Only Full Time x
                    </span>
                )}
            </div>

            <div className="page__jobBoard">
                {data.map((job) => {
                    if (
                        job.company.indexOf(final.title) === -1 ||
                        job.location.indexOf(final.location) === -1 ||
                        (final.fullTime === 'on' && job.contract !== 'Full Time')
                    ) {
                        return null;
                    }
                    return (
                        
                            <JobCard
                                key={job.id}
                                id={job.id}
                                logo={job.logo}
                                description={job.description}
                                website={job.website}
                                requirements={job.requirements}
                                role={job.role}
                                logoBackground={job.logoBackground}
                                postedAt={job.postedAt}
                                contract={job.contract}
                                company={job.company}
                                location={job.location}
                                openModal={openModal}
                            />
                       
                    );
                })}
            </div>
        </div>
    );
};

export default Home;

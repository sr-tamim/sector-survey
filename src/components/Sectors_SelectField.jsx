import axios from "axios"
import { useEffect, useState } from "react"
import { API_URL } from "../App";
import Sectors_SelectOption from "./Sectors_SelectOption";

// ------ custom multiselect component developed by "SR Tamim" --------
const Sectors_SelectField = ({ selectedSectors, selectAction }) => {
    // show options dropdown state
    const [showOptions, setShowOptions] = useState(false)

    // load all sectors from database
    const [allSectors, setAllSectors] = useState([])
    useEffect(() => {
        axios.get(`${API_URL}/sectors`).then(({ data }) => setAllSectors(data))
            .catch(error => console.dir(error))
    }, [])

    return (
        <div tabIndex={0} onClick={() => setShowOptions(prev => !prev)}
            className="group relative w-full min-h-[3rem] flex items-center gap-2 flex-wrap border border-primary rounded-lg px-4 py-2 focus:outline outline-2 outline-primary outline-offset-2"
        >
            {!selectedSectors.length ? <span className="text-gray-400 cursor-default">Select</span>
                // show selected options
                : selectedSectors.map(sector => <div key={sector.id}
                    className="badge badge-sm badge-primary">
                    {sector.name}
                </div>)}

            {/* background div to detect outside click */}
            {showOptions && <div className="fixed left-0 top-0 w-full h-full z-[9]"></div>}

            {/* --------- options dropdown ------------- */}
            <div onClick={(e) => e.stopPropagation()} key={allSectors.length}
                className={`absolute top-[110%] left-0 w-full h-44 bg-base-100 overflow-y-auto border border-primary rounded px-4 shadow-lg z-[10] transition origin-top ${showOptions ? 'scale-y-100' : 'scale-y-0'}`}
            >
                {allSectors.map(sector => <div className="flex flex-col my-4 text-sm" key={sector._id}
                >
                    <span className="text-gray-500">{sector.categoryName}</span>
                    {sector.sectors.map(subSector => <Sectors_SelectOption key={subSector.id}
                        info={{ sector: subSector, selectedSectors, selectAction }} />
                    )}

                    {sector?.subCategories?.map(subCategory => <div key={subCategory.id}
                        className="flex flex-col pl-3 my-2"
                    >
                        <span className="text-gray-500">{subCategory.categoryName}</span>
                        {subCategory.sectors.map(subSector2 => <Sectors_SelectOption key={subSector2.id}
                            info={{ sector: subSector2, selectedSectors, selectAction }} />
                        )}

                        {subCategory?.subCategories?.map(subCategory2 => <div key={subCategory2.id}
                            className="flex flex-col pl-4 my-2"
                        >
                            <span className="text-gray-500">{subCategory2.categoryName}</span>
                            {subCategory2.sectors.map(subSector3 => <Sectors_SelectOption key={subSector3.id}
                                info={{ sector: subSector3, selectedSectors, selectAction }} />
                            )}
                        </div>)}
                    </div>)}
                </div>)}
            </div>
        </div>
    );
};

export default Sectors_SelectField;
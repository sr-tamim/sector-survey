
const Sectors_SelectOption = ({ info: { sector, selectAction, selectedSectors } }) => {
    // ------- custom multiselect option component ---------
    return (<label
        className="flex gap-2 items-center pl-4 py-1 cursor-pointer"
    >
        <input type="checkbox" className="checkbox checkbox-xs checkbox-primary"
            defaultChecked={selectedSectors.find(item => item.id === sector.id)}
            onChange={({ target }) => selectAction(target.checked, sector)}
        />
        {sector.name}
    </label>);
};

export default Sectors_SelectOption;

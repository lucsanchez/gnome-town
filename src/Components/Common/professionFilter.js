import React, { useEffect} from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';
import { useTownProvider } from '../Provider/gnomeTownProvider';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '5%',
        [theme.breakpoints.down('sm')]: {
            marginTop: '10%',
        }
    },
    formControl: {
        margin: theme.spacing(2),
        width: '100%'
    },
    chips: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    chip: {
        margin: 2,
    },
    noLabel: {
        marginTop: theme.spacing(3),
    },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const professions = [
    ' Tinker',
    'Baker',
    'Blacksmith',
    'Brewer',
    'Butcher',
    'Carpenter',
    'Cook',
    'Farmer',
    'Gemcutter',
    'Leatherworker',
    'Marble Carver',
    'Mason',
    'Mechanic',
    'Medic',
    'Metalworker',
    'Miner',
    'Potter',
    'Prospector',
    'Sculptor',
    'Smelter',
    'Stonecarver',
    'Tailor',
    'Tax inspector',
    'Woodcarver',
    'Metalworker',
];

function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

export const ProfessionSelector = () => {
    const classes = useStyles();
    const theme = useTheme();
    const { setProfessionFilter } = useTownProvider()
    const [professionNames, setProfessionNames] = React.useState('');

    const handleChange = (event) => {
        setProfessionNames(event.target.value)
    };

    const handleDelete = (event) => {
        setProfessionNames('')

    }

    useEffect(() => {

        setProfessionFilter(professionNames)
    }, [professionNames])

    return (
        <div className={classes.root}>

            <FormControl className={classes.formControl}>
                <InputLabel id="demo-mutiple-chip-label">Select Profession</InputLabel>
                <Select
                    labelId="demo-mutiple-chip-label"
                    id="demo-mutiple-chip"
                    value={professionNames}
                    onChange={handleChange}
                    input={<Input id="select-multiple-chip" />}
                    renderValue={(selected) => (
                        <div className={classes.chips}>
                            <Chip key={selected} clickable onMouseDown={(event) => event.stopPropagation()}
                                onDelete={(e) => handleDelete(e)} label={selected} className={classes.chip} />
                        </div>
                    )}
                    MenuProps={MenuProps}
                >
                    {professions.map((profession, index) => (
                        <MenuItem key={index} value={profession} style={getStyles(profession, professionNames, theme)}>
                            {profession.trim()}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}
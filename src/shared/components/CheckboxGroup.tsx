/**
 * @fileoverview 
 * @author liuduan
 * @Date 2020-06-26 22:33:23
 * @LastEditTime 2020-06-26 23:33:00
 */
import React, { memo } from 'react';

class CheckboxGroup extends React.PureComponent<any, any> {
    constructor(props) {
        super(props);
        this.handleChangeAll = this.handleChangeAll.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChangeAll(e) {
        const { list, onChange } = this.props;
        const {
            checked,
        } = e.target;

        let newSelected = [];

        if (checked) {
            newSelected = list.map(({ id }) => id);
        }

        onChange(newSelected);
    }

    handleChange(e) {
        const { selected, onChange } = this.props;
        const {
            checked,
            value,
        } = e.target;

        let newSelected = [];

        if (checked) {
            newSelected = [...selected, value];
        } else {
            newSelected = selected.filter(s => s !== value);
        }

        onChange(newSelected);
    }

    render() {
        const { selected, list } = this.props;
        return (
            <>
                <Checkbox value="全选" id="all" checked={selected.length === list.length} onChange={this.handleChangeAll} />
                <hr />
                {
                    list.map(({
                        id,
                        value,
                    }) => {
                        return <Checkbox key={id} value={value} id={id} checked={selected.includes(id)} onChange={this.handleChange} />
                    })
                }
            </>
        );
    }
}

const CheckboxGroupHooks = ({
    selected,
    list,
    onChange,
}) => {

    function handleChangeAll(e) {
        const {
            checked,
        } = e.target;

        let newSelected = [];

        if (checked) {
            newSelected = list.map(({ id }) => id);
        }

        onChange(newSelected);
    }

    const handleChange = (e) => {
        const {
            checked,
            value,
        } = e.target;

        let newSelected = [];

        if (checked) {
            newSelected = [...selected, value];
        } else {
            newSelected = selected.filter(s => s !== value);
        }

        onChange(newSelected);
    };

    return (
        <>
            <Checkbox value="全选" id="all" checked={selected.length === list.length} onChange={handleChangeAll} />
            <hr />
            {
                list.map(({
                    id,
                    value,
                }) => {
                    return <Checkbox key={id} value={value} id={id} checked={selected.includes(id)} onChange={handleChange} />
                })
            }
        </>
    );
};

const Checkbox = memo(
    ({
        id,
        value,
        checked,
        ...otherProps
    }: any) => {
        console.log('Checkbox render', id);
        return <label>
            <input id={id} type="checkbox" value={id} checked={checked} {...otherProps} />
            {value}
        </label>

    }
);

export default CheckboxGroup;
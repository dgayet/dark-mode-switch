import React, {Component} from 'react'
import './ToggleSwitch.css'


class ToggleSwitch extends Component<{selected: boolean, 
                                      toggleSelected: React.MouseEventHandler<HTMLDivElement>}> {
    constructor(props: any) {
        super(props);
        this.state = {};
    }

    render() {
        const {selected, toggleSelected} = this.props;

        return (
            <div className={`toggleContainer ${selected? "enabled" : ""}`} onClick={toggleSelected}>
                <div className={`dialogButton ${selected? "" : "disabled"}`}></div>
                <span className={`modeIcon${selected? 'Enabled' : 'Disabled'}`}>{selected? '🌜' : '🌞'}</span>
            </div>
        )
    }
}

export default ToggleSwitch;
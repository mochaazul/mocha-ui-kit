
const primary = '#3878f6';
const primaryLighter = '#6698FA';

const darkForeground = '#28293D';
const lightForeground = '#FAFAFC';

const designVar = {
	backGround: {
		dark: '#1C1C28',
		light: '#fafafc'
	},
	foreGround: {
		dark: darkForeground,
		light: '#ebebf0'
	},
	text: {
		primary: lightForeground,
		dark: lightForeground,
		light: darkForeground
	},
	grey: {
		g01: '#55576f',
		g02: '#a8a8b8',
		g03: '#787a97'
	},
	primary,
	primaryLighter,
	red: {
		r00: '#E53535',
		r01: '#FF3B3B',
		r02: '#FF5C5C',
		r03: '#FF8080',
		washed: '#FFE5E5'
	},
	green: {
		g01: '#05A660',
		g02: '#06C270',
		g03: '#39D98A',
		g04: '#57EBA1',
		washed: '#E3FFF1'
	},
	blue: {
		b01: '#004FC4',
		b02: '#0063F7',
		b03: '#5B8DEF',
		b04: '#9DBFF9',
		washed: '#E5F0FF'
	},
	yellow: {
		y01: '#E5B800',
		y02: '#FFCC00',
		y03: '#FDDD48',
		y04: '#FDED72',
		washed: '#FFFEE5'
	},
	orange: {
		o01: '#E57A00',
		o02: '#FF8800',
		o03: '#FDAC42',
		o04: '#FCCC75',
		washed: '#FFF8E5'
	},
	teal: {
		t01: '#00B7C4',
		t02: '#00CFDE',
		t03: '#73DFE7',
		t04: '#A9EFF2',
		washed: '#E5FFFF'
	},
	purple: {
		p01: '#4D0099',
		p02: '#6600CC',
		p03: '#AC5DD9',
		p04: '#DDA5E9',
		washed: '#FFE5FF'
	},
	
	elevation: {
		/**
     * **USAGE**:
     * - Focused input forms
    */
		inset: 'inset 0px 0.5px 4px rgba(96, 97, 112, 0.32)',
		/**
     * **USAGE**:
     * - Card
     * - Pressed Button
     * - Progressive Button
     */
		level1: '0px 0px 1px rgba(40, 41, 61, 0.08), 0px 0.5px 2px rgba(96, 97, 112, 0.16);',
		/**
     * **USAGE**:
     * - Button
     * - Notification Badges
     */
		level2: '0px 0px 1px rgba(40, 41, 61, 0.04), 0px 2px 4px rgba(96, 97, 112, 0.16);',
		/**
     * **USAGE**:
     * - Navigation Menu
     * - Bar
    */
		level3: '0px 0px 2px rgba(40, 41, 61, 0.04), 0px 4px 8px rgba(96, 97, 112, 0.16);',
		/**
     * **USAGE**:
     * - Card raised
     * - Button raised
     * - Dropdown Menu
    */
		level4: '0px 2px 4px rgba(40, 41, 61, 0.04), 0px 8px 16px rgba(96, 97, 112, 0.16);',
		/**
     * **USAGE**:
     * - Picker
     * - Popover
    */
		level5: '0px 2px 8px rgba(40, 41, 61, 0.04), 0px 16px 24px rgba(96, 97, 112, 0.16);',
		/**
     * **USAGE**:
     * - Modals
     * - Dialogue
    */
		level6: '0px 2px 8px rgba(40, 41, 61, 0.08), 0px 20px 32px rgba(96, 97, 112, 0.24);'
	}
  
};

export default designVar;

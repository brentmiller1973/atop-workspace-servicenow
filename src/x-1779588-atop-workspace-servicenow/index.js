import {createCustomElement} from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import styles from './styles.scss';

const view = (state, { updateState }) => {
	const { code = '', visible = false } = state;
	const generateCode = () => {
		const random = Math.floor(10000 + Math.random() * 90000);
		updateState({ code: random.toString(), visible: true });
	};
	return (
		<div style={{ padding: '20px', backgroundColor: '#f0f0f0', borderRadius: '8px' }}>
			<h3>Generate Verification Code</h3>
			<button
				on-click={generateCode}
				style={{
					padding: '10px 16px',
					backgroundColor: '#0066cc',
					color: 'white',
					border: 'none',
					borderRadius: '4px',
					cursor: 'pointer'
				}}
			>
				Generate
			</button>
			{visible && (
				<div style={{ marginTop: '15px' }}>
					<input
						type="text"
						value={code}
						readonly
						style={{
							padding: '8px',
							borderRadius: '4px',
							border: '1px solid #ccc',
							width: '120px',
							textAlign: 'center',
							fontSize: '1.2em'
						}}
					/>
				</div>
			)}
		</div>
	);
};

createCustomElement('x-1779588-atop-workspace-servicenow', {
	renderer: {type: snabbdom},
	view,
	styles
});

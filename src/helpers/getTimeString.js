export default function getTimeString(dateString) {
	return (new Date(dateString)).toTimeString().slice(0,5)
}
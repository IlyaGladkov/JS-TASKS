import moment from 'moment';

export default function momentData(data, format) {
    return moment(data).format(format);
}
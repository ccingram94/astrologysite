'use client';
import { PDFDownloadLink } from '@react-pdf/renderer';
import PDFBirthChartFree from './PDFBirthChartFree';

const PDFDownloadButtonFree = ({ horoscope, chartData }) => (
  <PDFDownloadLink
    document={<PDFBirthChartFree horoscope={horoscope} chartData={chartData} />}
    fileName="birthchart.pdf"
  >
    {({ blob, url, loading, error }) =>
      loading ? (
        'Loading document...'
      ) : (
        <button className='btn btn-primary'>
          Download PDF
        </button>
      )
    }
  </PDFDownloadLink>
);

export default PDFDownloadButtonFree;

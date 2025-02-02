import LinkBoard from "@/components/LinkBoard/LinkBoard";
import Skill from "@/components/Skill/Skill";
import Image from "next/image";



export default function Home() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h2 >ปวินท์ ขำลักษณะ</h2>
      <div className="mb-8">
        <Image
          src="/images/profile.jpg"
          alt="Picture of the author"
          width={200}
          height={200}
          style={{ objectFit: 'cover', borderRadius: '50%' }}
        />
      </div>
      <br />
      <div>สวัสดีครับผม ปวินท์ ขำลักษณะ (ปุน)</div>
      <div>Hello I'm Pawin Khamlaksana (Poon)</div>
      <br />
      <div>Working at GISTDA</div><br />
      <div>
        <a href="https://www.facebook.com/pawin.khamlaksana/" target="_blank" rel="noopener noreferrer">
          <Image
            src="/images/facebook.png"
            alt="Facebook"
            width={30}
            height={30}
            style={{ margin: '0 10px' }}

          />
        </a>
        <a href="https://www.instagram.com/p00n_pwk/" target="_blank" rel="noopener noreferrer">
          <Image
            src="/images/instagram.png"
            alt="Instragram"
            width={30}
            height={30}
            style={{ margin: '0 10px' }}
          />
        </a>
        <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer">
          <Image
            src="/images/linkedin.png"
            alt="LinkedIn"
            width={30}
            height={30}
            style={{ margin: '0 10px' }}

          />
        </a>
        <a href="https://www.X.com" target="_blank" rel="noopener noreferrer">
          <Image
            src="/images/twitter.png"
            alt="Twitter"
            width={30}
            height={30}
            style={{ margin: '0 10px' }}
          />
        </a>
        <a href="https://github.com/p00n4k" target="_blank" rel="noopener noreferrer">
          <Image
            src="/images/github.png"
            alt="GitHub"
            width={30}
            height={30}
            style={{ margin: '0 10px' }}
          />
        </a>
        <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
          <Image
            src="/images/youtube.png"
            alt="YouTube"
            width={30}
            height={30}
            style={{ margin: '0 10px' }}
          />
        </a>
        <a href="https://www.notion.so/0bcc938f9dbe4063adf599ec7e921e17?v=4518033290974e54b0addf41caa77c4a" target="_blank" rel="noopener noreferrer">
          <Image
            src="/images/work.png"
            alt="Notion"
            width={30}
            height={30}
            style={{ margin: '0 10px' }}
          />
        </a>
        <Skill />
        <br />
        <LinkBoard />


      </div>


    </div>

  );
}

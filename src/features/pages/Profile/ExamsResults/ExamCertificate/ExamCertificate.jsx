import { useEffect, useRef } from "react";
import Button from "../../../../../components/Button/Button";
import { useStore } from "../../../../../zustand/store";
import { toPng } from "html-to-image";

export default function ExamCertificate({ exam, backToResults }) {
  const authData = useStore((state) => state.authData);
  const canvasRef = useRef(null);

  const handleDownload = async () => {
    if (canvasRef.current === null) {
      return;
    }

    const dataUrl = await toPng(canvasRef.current);
    const link = document.createElement("a");
    link.download = `certificate.png`;
    link.href = dataUrl;
    link.click();
  };

  const drawCertificate = (ctx, canvas) => {
    const img = new Image();
    img.src = "/assets/images/Certificate.png";

    img.onload = () => {
      ctx.drawImage(
        img,
        0,
        0,
        canvasRef.current.width,
        canvasRef.current.height
      );

      ctx.font = "30px Arial";
      ctx.fillStyle = "#642700";
      ctx.textAlign = "center";

      let maxWidth = 400;
      let x = canvas.width / 2 - 17;
      let y = canvas.height / 2 + 40;
      wrapText(ctx, exam?.student_name, x, y, maxWidth, 30);

      ctx.font = "18px Arial";

      maxWidth = 150;
      x = 305;
      y = 490;
      wrapText(ctx, exam.quiz_name, x, y, maxWidth, 18);
    };
  };

  const wrapText = (ctx, text, x, y, maxWidth, lineHeight) => {
    const words = text.split(" ");
    let line = "";
    let testLine, testWidth;

    for (let i = 0; i < words.length; i++) {
      testLine = line + words[i] + " ";
      testWidth = ctx.measureText(testLine).width;

      if (testWidth > maxWidth && i > 0) {
        ctx.fillText(line, x, y);
        line = words[i] + " ";
        y += lineHeight;
      } else {
        line = testLine;
      }
    }

    ctx.fillText(line, x, y);
  };

  const initializeCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = 1000;
    canvas.height = 700;

    drawCertificate(ctx, canvas);
  };

  useEffect(() => {
    initializeCanvas();
  }, [exam, authData]);

  return (
    <div>
      <canvas ref={canvasRef} style={{ width: "100%" }} />
      <div className="mb-3 d-flex gap-2 justify-content-center mt-3">
        <Button onClick={handleDownload}>تحميل</Button>
        <Button onClick={backToResults}>العودة إلى نتائج الامتحانات</Button>
      </div>
    </div>
  );
}

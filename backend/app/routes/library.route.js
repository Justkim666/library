const express = require("express");
const router = express.Router();
const libraryController = require("../controllers/library.controller");

// Route for "/docgia"
router.route("/docgia")
    .get(libraryController.findAllDocGia)
    .post(libraryController.createDocGia);

// Route for "/sach"
router.route("/sach")
    .get(libraryController.findAllSach)
    .post(libraryController.createSach);

// Route for "/nhanxuatban"
router.route("/nhaxuatban")
    .get(libraryController.findAllNhaXuatBan)
    .post(libraryController.createNhaXuatBan);

// Route for "/theodoimuonsach"
router.route("/theodoimuonsach")
    .get(libraryController.findAllTheoDoiMuonSach)
    .post(libraryController.createTheoDoiMuonSach);

// Route for "/nhanvien"
router.route("/nhanvien")
    .get(libraryController.findAllNhanVien)
    .post(libraryController.createNhanVien);

// Route for "/docgia/:id"
router.route("/docgia/:id")
    .get(libraryController.findDocGiaById)
    .put(libraryController.updateDocGia)
    .delete(libraryController.deleteDocGia);

// Route for "/sach/:id"
router.route("/sach/:id")
    .get(libraryController.findSachById)
    .put(libraryController.updateSach)
    .delete(libraryController.deleteSach);

// Route for "/nhanxuatban/:id"
router.route("/nhaxuatban/:id")
    .get(libraryController.findNhaXuatBanById)
    .put(libraryController.updateNhaXuatBan)
    .delete(libraryController.deleteNhaXuatBan);

// Route for "/theodoimuonsach/:MaDocGia/:MaSach"
router.route("/theodoimuonsach/:MaDocGia/:MaSach")
    .get(libraryController.findTheoDoiMuonSachByIds)
    .put(libraryController.updateTheoDoiMuonSach)
    .delete(libraryController.deleteTheoDoiMuonSach);

// Route for "/nhanvien/:id"
router.route("/nhanvien/:id")
    .get(libraryController.findNhanVienById)
    .put(libraryController.updateNhanVien)
    .delete(libraryController.deleteNhanVien);

module.exports = router;

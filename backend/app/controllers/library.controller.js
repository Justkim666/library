const ApiError = require("../api-error");
const LibraryService = require("../services/library.services");
const MongoDB = require("../utils/mongodb.util");

// Doc gia route
// ###################################################################################
exports.createDocGia = async (req, res, next) => {
    try {
        const libraryService = new LibraryService(MongoDB.client);
        const document = await libraryService.createOrUpdateDocGia(req.body);
        return res.send(document);
    } catch (error) {
        console.error("Error creating DocGia:", error);
        return next(
            new ApiError(500, "An error occurred while creating the DocGia")
        );
    }
};

exports.findAllDocGia = async (req, res, next) => {
    try {
        const libraryService = new LibraryService(MongoDB.client);
        const documents = await libraryService.findAllDocGia();
        return res.send(documents);
    } catch (error) {
        return next(
            new ApiError(500, "An error occurred while retrieving DocGia")
        );
    }
};

exports.findDocGiaById = async (req, res, next) => {
    try {
        const libraryService = new LibraryService(MongoDB.client);
        const document = await libraryService.findDocGiaById(req.params.id);
        if (!document) {
            return next(new ApiError(404, "DocGia not found"));
        }
        return res.send(document);
    } catch (error) {
        return next(
            new ApiError(
                500,
                `Error retrieving DocGia with id=${req.params.id}`
            )
        );
    }
};

exports.updateDocGia = async (req, res, next) => {
    if (Object.keys(req.body).length === 0) {
        return next(new ApiError(400, "Data to update can not be empty"));
    }
    try {
        const libraryService = new LibraryService(MongoDB.client);
        const document = await libraryService.updateDocGia(req.params.id, req.body);
        return res.send({ message: "DocGia was updated successfully" });
    } catch (error) {
        return next(
            new ApiError(500, `Error updating DocGia with id=${req.params.id}`)
        );
    }
};

exports.deleteDocGia = async (req, res, next) => {
    try {
        const libraryService = new LibraryService(MongoDB.client);
        const document = await libraryService.deleteDocGia(req.params.id);
        return res.send({ message: "DocGia was deleted successfully" });
    } catch (error) {
        return next(
            new ApiError(
                500,
                `Could not delete DocGia with id=${req.params.id}`
            )
        );
    }
};

// Sach route
// ################################################################################### 
exports.createSach = async (req, res, next) => {
    try {
        const libraryService = new LibraryService(MongoDB.client);
        const document = await libraryService.createOrUpdateSach(req.body);
        return res.status(201).json({ message: "Book created successfully", document });
    } catch (error) {
        console.error("Error creating Sach:", error);
        return next(
            new ApiError(500, "An error occurred while creating the Sach")
        );
    }
};


exports.findAllSach = async (req, res, next) => {
    try {
        const libraryService = new LibraryService(MongoDB.client);
        const documents = await libraryService.findAllSach();
        return res.send(documents);
    } catch (error) {
        return next(
            new ApiError(500, "An error occurred while retrieving Sach")
        );
    }
};

exports.findSachById = async (req, res, next) => {
    try {
        const libraryService = new LibraryService(MongoDB.client);
        const document = await libraryService.findSachById(req.params.id);
        if (!document) {
            return next(new ApiError(404, "Sach not found"));
        }
        return res.send(document);
    } catch (error) {
        return next(
            new ApiError(
                500,
                `Error retrieving Sach with id=${req.params.id}`
            )
        );
    }
};

exports.updateSach = async (req, res, next) => {
    if (Object.keys(req.body).length === 0) {
        return next(new ApiError(400, "Data to update can not be empty"));
    }
    try {
        const libraryService = new LibraryService(MongoDB.client);
        const document = await libraryService.updateSach(req.params.id, req.body);
        return res.send({ message: "Sach was updated successfully" });
    } catch (error) {
        return next(
            new ApiError(500, `Error updating Sach with id=${req.params.id}`)
        );
    }
};

exports.deleteSach = async (req, res, next) => {
    try {
        const libraryService = new LibraryService(MongoDB.client);
        const document = await libraryService.deleteSach(req.params.id);
        return res.send({ message: "Sach was deleted successfully" });
    } catch (error) {
        return next(
            new ApiError(
                500,
                `Could not delete Sach with id=${req.params.id}`
            )
        );
    }
};

// Nha xuat ban route
// ###################################################################################
exports.createNhaXuatBan = async (req, res, next) => {
    try {
        const libraryService = new LibraryService(MongoDB.client);
        const document = await libraryService.createOrUpdateNhaXuatBan(req.body);
        return res.send(document);
    } catch (error) {
        console.error("Error creating NhaXuatBan:", error);
        return next(
            new ApiError(500, "An error occurred while creating the NhaXuatBan")
        );
    }
};

exports.findAllNhaXuatBan = async (req, res, next) => {
    try {
        const libraryService = new LibraryService(MongoDB.client);
        const documents = await libraryService.findAllNhaXuatBan();
        return res.send(documents);
    } catch (error) {
        return next(
            new ApiError(500, "An error occurred while retrieving NhaXuatBan")
        );
    }
};

exports.findNhaXuatBanById = async (req, res, next) => {
    try {
        const libraryService = new LibraryService(MongoDB.client);
        const document = await libraryService.findNhaXuatBanById(req.params.id);
        if (!document) {
            return next(new ApiError(404, "NhaXuatBan not found"));
        }
        return res.send(document);
    } catch (error) {
        return next(
            new ApiError(
                500,
                `Error retrieving NhaXuatBan with id=${req.params.id}`
            )
        );
    }
};

exports.updateNhaXuatBan = async (req, res, next) => {
    if (Object.keys(req.body).length === 0) {
        return next(new ApiError(400, "Data to update can not be empty"));
    }
    try {
        const libraryService = new LibraryService(MongoDB.client);
        const document = await libraryService.updateNhaXuatBan(req.params.id, req.body);
        return res.send({ message: "NhaXuatBan was updated successfully" });
    } catch (error) {
        return next(
            new ApiError(500, `Error updating NhaXuatBan with id=${req.params.id}`)
        );
    }
};

exports.deleteNhaXuatBan = async (req, res, next) => {
    try {
        const libraryService = new LibraryService(MongoDB.client);
        const document = await libraryService.deleteNhaXuatBan(req.params.id);
        return res.send({ message: "NhaXuatBan was deleted successfully" });
    } catch (error) {
        return next(
            new ApiError(
                500,
                `Could not delete NhaXuatBan with id=${req.params.id}`
            )
        );
    }
};

// TheoDoiMuonSach routes
// ###################################################################################
exports.createTheoDoiMuonSach = async (req, res, next) => {
    try {
        const libraryService = new LibraryService(MongoDB.client);
        const document = await libraryService.createOrUpdateTheoDoiMuonSach(req.body);
        return res.send(document);
    } catch (error) {
        console.error("Error creating TheoDoiMuonSach:", error);
        return next(
            new ApiError(500, "An error occurred while creating the TheoDoiMuonSach")
        );
    }
};

exports.findAllTheoDoiMuonSach = async (req, res, next) => {
    try {
        const libraryService = new LibraryService(MongoDB.client);
        const documents = await libraryService.findAllTheoDoiMuonSach();
        return res.send(documents);
    } catch (error) {
        return next(
            new ApiError(500, "An error occurred while retrieving TheoDoiMuonSach")
        );
    }
};

exports.findTheoDoiMuonSachByIds = async (req, res, next) => {
    try {
        const libraryService = new LibraryService(MongoDB.client);
        const document = await libraryService.findTheoDoiMuonSachByIds(req.params.MaDocGia, req.params.MaSach);
        if (!document) {
            return next(new ApiError(404, "TheoDoiMuonSach not found"));
        }
        return res.send(document);
    } catch (error) {
        return next(
            new ApiError(
                500,
                `Error retrieving TheoDoiMuonSach with MaDocGia=${req.params.MaDocGia} and MaSach=${req.params.MaSach}`
            )
        );
    }
};

exports.updateTheoDoiMuonSach = async (req, res, next) => {
    if (Object.keys(req.body).length === 0) {
        return next(new ApiError(400, "Data to update can not be empty"));
    }
    try {
        const libraryService = new LibraryService(MongoDB.client);
        const document = await libraryService.updateTheoDoiMuonSach(req.params.MaDocGia, req.params.MaSach, req.body);
        return res.send({ message: "TheoDoiMuonSach was updated successfully" });
    } catch (error) {
        return next(
            new ApiError(500, `Error updating TheoDoiMuonSach with MaDocGia=${req.params.MaDocGia} and MaSach=${req.params.MaSach}`)
        );
    }
};

exports.deleteTheoDoiMuonSach = async (req, res, next) => {
    try {
        const libraryService = new LibraryService(MongoDB.client);
        const document = await libraryService.deleteTheoDoiMuonSach(req.params.MaDocGia, req.params.MaSach);
        return res.send({ message: "TheoDoiMuonSach was deleted successfully" });
    } catch (error) {
        return next(
            new ApiError(
                500,
                `Could not delete TheoDoiMuonSach with MaDocGia=${req.params.MaDocGia} and MaSach=${req.params.MaSach}`
            )
        );
    }
};

// NhanVien routes
// ###################################################################################
exports.createNhanVien = async (req, res, next) => {
    try {
        const libraryService = new LibraryService(MongoDB.client);
        const document = await libraryService.createOrUpdateNhanVien(req.body);
        return res.send(document);
    } catch (error) {
        console.error("Error creating NhanVien:", error);
        return next(
            new ApiError(500, "An error occurred while creating the NhanVien")
        );
    }
};

exports.findAllNhanVien = async (req, res, next) => {
    try {
        const libraryService = new LibraryService(MongoDB.client);
        const documents = await libraryService.findAllNhanVien();
        return res.send(documents);
    } catch (error) {
        return next(
            new ApiError(500, "An error occurred while retrieving NhanVien")
        );
    }
};

exports.findNhanVienById = async (req, res, next) => {
    try {
        const libraryService = new LibraryService(MongoDB.client);
        const document = await libraryService.findNhanVienById(req.params.id);
        if (!document) {
            return next(new ApiError(404, "NhanVien not found"));
        }
        return res.send(document);
    } catch (error) {
        return next(
            new ApiError(
                500,
                `Error retrieving NhanVien with id=${req.params.id}`
            )
        );
    }
};

exports.updateNhanVien = async (req, res, next) => {
    if (Object.keys(req.body).length === 0) {
        return next(new ApiError(400, "Data to update can not be empty"));
    }
    try {
        const libraryService = new LibraryService(MongoDB.client);
        const document = await libraryService.updateNhanVien(req.params.id, req.body);
        return res.send({ message: "NhanVien was updated successfully" });
    } catch (error) {
        return next(
            new ApiError(500, `Error updating NhanVien with id=${req.params.id}`)
        );
    }
};

exports.deleteNhanVien = async (req, res, next) => {
    try {
        const libraryService = new LibraryService(MongoDB.client);
        const document = await libraryService.deleteNhanVien(req.params.id);
        return res.send({ message: "NhanVien was deleted successfully" });
    } catch (error) {
        return next(
            new ApiError(
                500,
                `Could not delete NhanVien with id=${req.params.id}`
            )
        );
    }
};

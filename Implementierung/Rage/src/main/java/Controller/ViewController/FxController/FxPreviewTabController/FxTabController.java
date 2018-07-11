package src.main.java.Controller.ViewController.FxController.FxPreviewTabController;

import src.main.java.Controller.LogicController.TabController;
import src.main.java.Controller.ViewController.FxController.FxRageController;
import java.util.ArrayList;
import java.util.List;

/**
 * Class FxTabController This is the FxControler for the upper Preview-Tab. It
 * manages the whole thing including the Sub Tabs like: Preview, DetailView and
 * Statistics
 */
public class FxTabController {

    //
    // Fields
    //
    /**
     * This is the TabController which Contains the DataPool of this Tab as well
     * as the other sub-Controller like Statistic, Heuristic and DetailView.
     */
    private TabController tabController;
    /**
     * The FxController for this Preview-Tab.
     */
    private FxPreviewController fxPreviewController;
    /**
     * A List of all FxDetailViews that are currently needed because these
     * DetailViews are opened.
     */
    private List<FxDetailViewController> detailViewList;
    /**
     * The FxStatisticController for this whole Preview-Tab.
     */
    private FxStatisticController fxStatisticController;
    /**
     *
     * This is the Upper-Controller. It is needed in this Class so that this
     * Controller can access the needed Super-Controller parts. (Because the
     * FxRageController is the only direct connecton between the ViewController
     * and the SuperController)
     */

    private FxRageController fxRageController;

    //
    // Constructors
    //
    /**
     * The Empty-Constructor of this Class.
     */
    public FxTabController() {
    }

    //
    // Methods
    //
    //
    // Accessor methods
    //
    /**
     * Set the value of tabController This is the TabController which Contains
     * the DataPool of this Tab as well as the other sub-Controller like
     * Statistic, Heuristic and DetailView. It is called from FxRageController
     * that gets the needed TabController from the SuperController.
     *
     * @param newTabController The given TabController to set the Attribute to.
     */
    public void setTabController(TabController newTabController) {
        tabController = newTabController;
    }

    /**
     * Get the value of tabController This is the TabController which Contains
     * the DataPool of this Tab as well as the other sub-Controller like
     * Statistic, Heuristic and DetailView.
     *
     * @return the value of tabController
     */
    private TabController getTabController() {
        return tabController;
    }

    /**
     * Set the value of fxPreviewController The FxController for this
     * Preview-Tab.
     *
     * @param newFxPreviewController the new value of fxPreviewController
     */
    private void setFxPreviewController(FxPreviewController newFxPreviewController) {
        fxPreviewController = newFxPreviewController;
    }

    /**
     * Get the value of fxPreviewController The FxController for this
     * Preview-Tab.
     *
     * @return the value of fxPreviewController
     */
    private FxPreviewController getFxPreviewController() {
        return fxPreviewController;
    }

    /**
     * Set the value of detailViewList A List of all FxDetailViews that are
     * currently needed because these DetailViews are opened.
     *
     * @param newVar the new value of detailViewList
     */
    private void setDetailViewList(List<FxDetailViewController> newDVList) {
        if (this.detailViewList == null) {
            this.detailViewList = new ArrayList<>();
        }
        this.detailViewList.clear();
        this.detailViewList.addAll(newDVList);
    }

    /**
     * Get the value of detailViewList A List of all FxDetailViews that are
     * currently needed because these DetailViews are opened.
     *
     * @return the value of detailViewList
     */
    private List<FxDetailViewController> getDetailViewList() {
        return detailViewList;
    }

    /**
     * Set the value of fxStatisticController The FxStatisticController for this
     * whole Preview-Tab.
     *
     * @param newFxStatisticController the new value of fxStatisticController
     */
    private void setFxStatisticController(FxStatisticController newFxStatisticController) {
        fxStatisticController = newFxStatisticController;
    }

    /**
     * Get the value of fxStatisticController The FxStatisticController for this
     * whole Preview-Tab.
     *
     * @return the value of fxStatisticController
     */
    private FxStatisticController getFxStatisticController() {
        return fxStatisticController;
    }

    /**
     * Set the value of fxRageController This is the Upper-Controller. It is
     * needed in this Class so that this Controller can access the needed
     * Super-Controller parts. (Because the FxRageController is the only direct
     * connecton between the ViewController and the SuperController)
     *
     * @param newFxRageController the new value of fxRageController
     */
    private void setFxRageController(FxRageController newFxRageController) {
        fxRageController = newFxRageController;
    }

    /**
     * Get the value of fxRageController This is the Upper-Controller. It is
     * needed in this Class so that this Controller can access the needed
     * Super-Controller parts. (Because the FxRageController is the only direct
     * connecton between the ViewController and the SuperController) This Method
     * is protected. This is used so that the startEditor-Method can do what it
     * should and starts the Editor.
     *
     * @return the value of fxRageController
     *
     */
    private FxRageController getFxRageController() {
        return fxRageController;
    }
}
